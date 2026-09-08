import { NextResponse } from "next/server";

/*
 * Server-side relay for the "Keep me posted" form.
 *
 * The submission is forwarded to HubSpot's Forms API v3. Running it here rather
 * than from the browser keeps the portal and form ids off the client and lets us
 * log HubSpot's rejection detail without showing it to the visitor.
 *
 * Shape verified against the live API: the /integration/submit path takes no
 * authentication, and failures come back as
 * { status, message, correlationId, propertiesErrorCode?, errors? }.
 */
const SUBMIT_URL = "https://api.hsforms.com/submissions/v3/integration/submit";

/** HubSpot's object type id for contacts. */
const CONTACT = "0-1";

/**
 * Our field names mapped to HubSpot's internal contact property names. `role`
 * and `handoff_story` are custom properties and must exist on the HubSpot form,
 * otherwise HubSpot rejects the whole submission.
 */
const FIELD_MAP: ReadonlyArray<readonly [string, string]> = [
  ["firstName", "firstname"],
  ["lastName", "lastname"],
  ["email", "email"],
  ["role", "role"],
  ["story", "handoff_story"],
];

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    console.error(
      "[signup] Not configured: HUBSPOT_PORTAL_ID and HUBSPOT_FORM_ID must both be set. " +
        "The submission was received but not forwarded to HubSpot.",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const read = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");

  const email = read("email");
  if (!validEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  /* Blank optional answers are dropped so they never overwrite existing values. */
  const fields = FIELD_MAP.map(([from, name]) => ({
    objectTypeId: CONTACT,
    name,
    value: read(from),
  })).filter((field) => field.value !== "");

  /* Ties the submission to the visitor's HubSpot tracking cookie when one exists. */
  const hutk = request.headers.get("cookie")?.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];

  let response: Response;
  try {
    response = await fetch(`${SUBMIT_URL}/${portalId}/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submittedAt: Date.now(),
        fields,
        context: {
          ...(hutk ? { hutk } : {}),
          pageUri: read("pageUri") || request.headers.get("referer") || "",
          pageName: read("pageName") || "CareShift",
        },
      }),
    });
  } catch (cause) {
    console.error("[signup] Could not reach HubSpot:", cause);
    return NextResponse.json({ error: "submit_failed" }, { status: 502 });
  }

  if (response.ok) return NextResponse.json({ ok: true });

  const detail = await response.text().catch(() => "");
  console.error(`[signup] HubSpot rejected the submission (HTTP ${response.status}): ${detail}`);
  return NextResponse.json({ error: "submit_failed" }, { status: 502 });
}

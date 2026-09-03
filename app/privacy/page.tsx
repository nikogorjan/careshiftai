{/* Draft for legal review. Not to be published as final without review by counsel. */}
import type { Metadata } from "next";
import { LEGAL_ENTITY, LegalH2, LegalLink, LegalShell, P, UL } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | CareShift",
  description: "How CareShift collects, uses, and protects the information you share with us.",
};

const TOC = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-we-use-it", label: "How we use it" },
  { id: "legal-basis", label: "Legal basis and consent" },
  { id: "sharing", label: "Sharing" },
  { id: "cookies", label: "Cookies" },
  { id: "retention", label: "Retention" },
  { id: "your-rights", label: "Your rights" },
  { id: "children", label: "Children" },
  { id: "security", label: "Security" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" toc={TOC}>
      <LegalH2 id="who-we-are">Who we are</LegalH2>
      <P>
        {LEGAL_ENTITY} runs this website to share our mission: fixing the nursing handoff.{" "}
        {LEGAL_ENTITY} is located at 6060 N Central Expy, Dallas, TX 75206. You can reach us any
        time at{" "}
        <LegalLink href="mailto:caroline@careshiftai.com">caroline@careshiftai.com</LegalLink>.
      </P>

      <LegalH2 id="what-we-collect">What we collect</LegalH2>
      <P>When you fill in the signup form, we collect what you choose to give us:</P>
      <UL>
        <li>your first and last name (optional)</li>
        <li>your email address</li>
        <li>your role, if you select one (nurse, physician, or other)</li>
        <li>your handoff story, if you write one</li>
      </UL>
      <P>
        Like most websites, our hosting infrastructure also records standard technical data such as
        your IP address, browser type, and the pages you visit, in server logs used to keep the
        site running and secure. We do not currently use any analytics tools.
      </P>
      <P>
        This site does not collect patient data or protected health information, and we ask you not
        to include any in your story. Please leave out patient names, dates of care, room numbers,
        or anything else that could identify a patient or their care. If a submission contains such
        details, we may delete it.
      </P>

      <LegalH2 id="how-we-use-it">How we use it</LegalH2>
      <P>We use the information you share to:</P>
      <UL>
        <li>send you mission updates you signed up for</li>
        <li>
          read the handoff stories you share, and, only with your separate permission, quote from
          them in our materials
        </li>
        <li>understand who is following the mission and improve the site</li>
      </UL>

      <LegalH2 id="legal-basis">Legal basis and consent</LegalH2>
      <P>
        We process your information based on your consent, which you give by submitting the form.
        You can withdraw that consent at any time by using the unsubscribe link in any email we
        send, or by writing to{" "}
        <LegalLink href="mailto:caroline@careshiftai.com">caroline@careshiftai.com</LegalLink>.
        Withdrawing consent does not affect processing that happened before you withdrew it.
      </P>

      <LegalH2 id="sharing">Sharing</LegalH2>
      <P>
        We do not sell your personal information, and we do not share it with anyone for their own
        marketing. The only third parties that touch your data are the service providers that make
        the site work:
      </P>
      <UL>
        <li>form delivery: Web3Forms, which forwards your submission to our email inbox</li>
        <li>hosting: Vercel, which serves the website and keeps standard server logs</li>
        <li>analytics: none at this time</li>
      </UL>
      <P>
        These providers process data on our behalf and are not permitted to use it for their own
        purposes. We may also disclose information if the law requires it.
      </P>

      <LegalH2 id="cookies">Cookies</LegalH2>
      <P>
        This site does not set cookies. We use no advertising, analytics, or tracking cookies. If
        we add an analytics tool in the future, we will update this policy and describe how to opt
        out before it takes effect.
      </P>

      <LegalH2 id="retention">Retention</LegalH2>
      <P>
        We keep your signup information for as long as you are subscribed to mission updates. If
        you unsubscribe or ask us to delete your data, we remove it within 30 days. Handoff stories
        are kept while they remain useful to the mission and are deleted on request at any time.
      </P>

      <LegalH2 id="your-rights">Your rights</LegalH2>
      <P>You can always ask us to:</P>
      <UL>
        <li>tell you what information we hold about you (access)</li>
        <li>correct information that is wrong (correction)</li>
        <li>delete your information (deletion)</li>
        <li>stop sending you updates (opt-out)</li>
      </UL>
      <P>
        To exercise any of these rights, email{" "}
        <LegalLink href="mailto:caroline@careshiftai.com">caroline@careshiftai.com</LegalLink> and
        we will respond within a reasonable time.
      </P>
      <P>
        If you are a Texas resident, the Texas Data Privacy and Security Act gives you the right to
        confirm whether we process your personal data, to access, correct, delete, and obtain a
        copy of it, and to opt out of targeted advertising, sale, and certain profiling. We do not
        sell personal data or use it for targeted advertising. You may exercise these rights, or
        appeal a decision we make about a request, by emailing the address above.
      </P>
      <P>
        Residents of other US states, and of the EU or UK, may have additional rights under their
        local law. You can use the same contact address for any request, wherever you live.
      </P>

      <LegalH2 id="children">Children</LegalH2>
      <P>
        This site is not directed to anyone under 18, and we do not knowingly collect information
        from anyone under 18. If you believe a minor has submitted information, contact us and we
        will delete it.
      </P>

      <LegalH2 id="security">Security</LegalH2>
      <P>
        We take reasonable technical and organizational measures to protect your information, such
        as serving the site over HTTPS and limiting who can access submissions. No method of
        transmission or storage is completely secure, so we cannot guarantee absolute security.
      </P>

      <LegalH2 id="changes">Changes to this policy</LegalH2>
      <P>
        We may update this policy as the mission and the site evolve. When we do, we will change
        the date at the top of this page, and for significant changes we will say so on the site or
        by email.
      </P>

      <LegalH2 id="contact">Contact</LegalH2>
      <P>
        Questions about this policy or your data:{" "}
        <LegalLink href="mailto:caroline@careshiftai.com">caroline@careshiftai.com</LegalLink>, or
        write to us at 6060 N Central Expy, Dallas, TX 75206.
      </P>
    </LegalShell>
  );
}

{/* Draft for legal review. Not to be published as final without review by counsel. */}
import type { Metadata } from "next";
import { LEGAL_ENTITY, LegalH2, LegalLink, LegalShell, P, UL } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Use | CareShift",
  description: "The terms that apply when you use the CareShift website.",
};

const TOC = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "who-we-are", label: "Who we are and what the site is" },
  { id: "eligibility", label: "Eligibility" },
  { id: "use-of-site", label: "Use of the site" },
  { id: "submissions", label: "User submissions" },
  { id: "testimonials", label: "Testimonials" },
  { id: "ip", label: "Intellectual property" },
  { id: "third-party", label: "Third-party links" },
  { id: "no-warranties", label: "No warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes to the terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" toc={TOC}>
      <LegalH2 id="acceptance">Acceptance of terms</LegalH2>
      <P>
        By using this website, you agree to these Terms of Use and to our{" "}
        <LegalLink href="/privacy">Privacy Policy</LegalLink>. If you do not agree, please do not
        use the site.
      </P>

      <LegalH2 id="who-we-are">Who we are and what the site is</LegalH2>
      <P>
        This site is operated by {LEGAL_ENTITY}, located at 6060 N Central Expy, Dallas, TX 75206.
        It is an informational site about a mission and a product in development.
        Nothing on this site is medical advice, clinical guidance, or a substitute for your
        institution&rsquo;s protocols, policies, or professional judgment. Always follow the
        procedures of your workplace and the guidance of qualified professionals.
      </P>

      <LegalH2 id="eligibility">Eligibility</LegalH2>
      <P>You must be at least 18 years old to use this site or submit information through it.</P>

      <LegalH2 id="use-of-site">Use of the site</LegalH2>
      <P>
        You may browse the site and share it, and use the signup form for its intended purpose. You
        agree not to:
      </P>
      <UL>
        <li>scrape, harvest, or bulk-download content or data from the site</li>
        <li>interfere with the site&rsquo;s operation, security, or availability</li>
        <li>submit unlawful, defamatory, or infringing content</li>
        <li>misrepresent who you are or submit information on someone else&rsquo;s behalf without permission</li>
        <li>use the site to send spam or automated submissions</li>
      </UL>

      <LegalH2 id="submissions">User submissions</LegalH2>
      <P>
        When you submit a handoff story or other content, you keep ownership of it. You grant
        CareShift a non-exclusive license to read and store it. We will not quote your story
        publicly without asking you first and receiving your separate permission.
      </P>
      <P>
        You must not include patient information, protected health information, or details that
        identify any third party in a submission. You are responsible for what you submit. CareShift
        may decline, edit for anonymity with your permission, or remove any submission at its
        discretion.
      </P>

      <LegalH2 id="testimonials">Testimonials</LegalH2>
      <P>
        Statements from named individuals on this site are their own views, shared with their
        permission. They do not speak for their employers unless stated, and they are not
        endorsements of any specific product capability.
      </P>

      <LegalH2 id="ip">Intellectual property</LegalH2>
      <P>
        The content of this site, and the CareShift name and logo, belong to CareShift or its
        licensors. You may not use them without our prior written permission, except as allowed by
        law.
      </P>

      <LegalH2 id="third-party">Third-party links</LegalH2>
      <P>
        The site may link to third-party websites. We do not control them and are not responsible
        for their content or practices. Visiting them is at your own risk.
      </P>

      <LegalH2 id="no-warranties">No warranties</LegalH2>
      <P>
        The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties
        of any kind, express or implied, including fitness for a particular purpose,
        merchantability, and non-infringement. We do not warrant that the site will be
        uninterrupted, error-free, or secure.
      </P>

      <LegalH2 id="liability">Limitation of liability</LegalH2>
      <P>
        To the fullest extent permitted by law, CareShift will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of data, arising from
        your use of the site. Where liability cannot be excluded, it is limited to the maximum
        extent the law allows.
      </P>

      <LegalH2 id="indemnification">Indemnification</LegalH2>
      <P>
        You agree to indemnify and hold CareShift harmless from claims, damages, and expenses,
        including reasonable attorneys&rsquo; fees, arising from your violation of these terms or
        your misuse of the site.
      </P>

      <LegalH2 id="governing-law">Governing law</LegalH2>
      <P>
        These terms are governed by the laws of the State of Texas, without regard to its conflict
        of law rules. Any dispute will be brought exclusively in the state or federal courts
        located in Dallas County, Texas, and you consent to their jurisdiction.
      </P>

      <LegalH2 id="changes">Changes to the terms</LegalH2>
      <P>
        We may update these terms from time to time. Changes take effect when posted on this page,
        with the date at the top updated. Continuing to use the site after a change means you
        accept the updated terms.
      </P>

      <LegalH2 id="contact">Contact</LegalH2>
      <P>
        Questions about these terms:{" "}
        <LegalLink href="mailto:caroline@careshiftai.com">caroline@careshiftai.com</LegalLink>, or
        write to us at 6060 N Central Expy, Dallas, TX 75206.
      </P>
    </LegalShell>
  );
}

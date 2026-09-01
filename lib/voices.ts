export type Voice = {
  name: string;
  role: string;
  initials: string;
  quote: string;
};

/** Real supporters of CareShift; quotes framed around the mission. */
export const voices: Voice[] = [
  {
    name: "Dr. Kymberlee Cox",
    role: "Chief Nursing Officer \u00b7 Johns Hopkins Hospital",
    initials: "KC",
    quote:
      "When handoffs are clear and consistent, nurses communicate better, spend less time piecing information together, and get to focus on what actually matters \u2014 the patient. That's the change worth fighting for.",
  },
  {
    name: "Nadine Williamson",
    role: "Executive Senior Vice President \u00b7 1199SEIU United Healthcare Workers East",
    initials: "NW",
    quote:
      "This is the kind of change healthcare workers truly need \u2014 one that respects nurses' expertise, eases the burden, and strengthens communication at the moments that matter most.",
  },
  {
    name: "Sara Stone",
    role: "Registered Nurse \u00b7 Enhabit, Inc.",
    initials: "SS",
    quote:
      "Anything that gives nurses back the time we lose to documentation \u2014 and protects the details that keep patients safe \u2014 has my full support.",
  },
  {
    name: "Shannetta Simon, RN",
    role: "Registered Nurse \u00b7 Children's of Alabama",
    initials: "SS",
    quote:
      "A handoff should help me organize my thoughts and feel confident that nothing critical is missed \u2014 supporting nurses instead of slowing us down. That's clarity, safety, and peace of mind at every shift change.",
  },
  {
    name: "Sealena White",
    role: "Assistant Director ESP ITT, Clinical Instructor \u00b7 Emory Healthcare",
    initials: "SW",
    quote:
      "Handoffs should support sound clinical judgment and help nurses feel confident nothing important is overlooked. When something truly supports how nurses think and work, it has real value at the bedside.",
  },
  {
    name: "Jorge Arenivar",
    role: "Case Manager \u00b7 TIRR Memorial Hermann",
    initials: "JA",
    quote:
      "Better handoffs mean information moves cleanly across the whole care team \u2014 safer discharges, better coordination, and real continuity of care for the people we serve.",
  },
];

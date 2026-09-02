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
    role: "Chief Nursing Officer · Johns Hopkins Hospital",
    initials: "KC",
    quote:
      "When handoffs are clear and consistent, nurses communicate better, spend less time piecing information together, and get to focus on what actually matters: the patient. That's the change worth fighting for.",
  },
  {
    name: "Nadine Williamson",
    role: "Executive Senior Vice President · 1199SEIU United Healthcare Workers East",
    initials: "NW",
    quote:
      "This is the kind of change healthcare workers truly need: one that respects nurses' expertise, eases the burden, and strengthens communication at the moments that matter most.",
  },
  {
    name: "Sara Stone",
    role: "Registered Nurse · Enhabit, Inc.",
    initials: "SS",
    quote:
      "Anything that gives nurses back the time we lose to documentation, and protects the details that keep patients safe, has my full support.",
  },
  {
    name: "Shannetta Simon, RN",
    role: "Registered Nurse · Children's of Alabama",
    initials: "SS",
    quote:
      "A handoff should help me organize my thoughts and feel confident that nothing critical is missed, supporting nurses instead of slowing us down. That's clarity, safety, and peace of mind at every shift change.",
  },
  {
    name: "Sealena White",
    role: "Assistant Director ESP ITT, Clinical Instructor · Emory Healthcare",
    initials: "SW",
    quote:
      "Handoffs should support sound clinical judgment and help nurses feel confident nothing important is overlooked. When something truly supports how nurses think and work, it has real value at the bedside.",
  },
  {
    name: "Jorge Arenivar",
    role: "Case Manager · TIRR Memorial Hermann",
    initials: "JA",
    quote:
      "Better handoffs mean information moves cleanly across the whole care team: safer discharges, better coordination, and real continuity of care for the people we serve.",
  },
];

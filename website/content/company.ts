// Who is behind Pravnya. Google weighs real, named people and a real address heavily for
// child-health topics. Every field is optional: sections render only once they're filled in.
// Never add people, titles or credentials that aren't real and agreed with the person.

export type Person = {
  name: string;
  role: string;
  /** One or two sentences: relevant experience or qualification. */
  bio?: string;
  /** Profile URL (e.g. LinkedIn), also used in structured data. */
  url?: string;
};

export const company: {
  legalName?: string;
  /** Registered or postal address, one line per entry. */
  address?: string[];
  addressCountry?: "IN" | "AE";
  team: Person[];
  advisors: Person[];
  /** Company social profiles (LinkedIn, Instagram…), added to structured data. */
  profiles: string[];
} = {
  legalName: "Pravnix Labs Pvt Ltd",
  team: [],
  advisors: [],
  profiles: [],
};

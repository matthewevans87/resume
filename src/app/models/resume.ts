export interface Term {
  name?: string;
  aliases?: string[];
  url?: string;
}

export interface Technology extends Term {}

export interface NestedList {
  description?: string;
  children?: Accomplishment[];
}

export interface Accomplishment extends NestedList {}

export interface Responsibility extends NestedList {}

export interface Project {
  title?: string;
  subTitle?: string;
  description?: string;
  distinguishedAttributes?: string[];
  accomplishments?: Accomplishment[];
  technologyNames?: string[];
  isDisabled: boolean;
}

export interface Testimonial {
  body?: string;
  author?: string;
  authorUrl?: string;
  position?: string;
  team?: string;
  company?: string;
}

export interface Position {
  name?: string;
  team?: string;
  startYear?: number;
  endYear?: number;
  projects?: Project[];
  responsibilities?: Responsibility[];
  testimonials?: Testimonial[];
}

export interface Company {
  name?: string;
  city?: string;
  state?: string;
  url?: string;
  positions?: Position[];
}

export interface Institution {
  name?: string;
  city?: string;
  state?: string;
  url?: string;
  certificates?: Certificate[];
}

export interface Certificate {
  type?: string;
  certName?: string;
  certUrl?: string;
  school?: string;
  schoolUrl?: string;
  date?: string;
}

export interface AdditionalExperience {
  personalProjects?: Project[];
}

export interface Candidate {
  name: string;
  location?: string;
  locationUrl?: string;
  phoneNumber?: string;
  emailAddress?: string;
  stackOverflowUsername?: string;
}

export interface Resume {
  candidate: Candidate;
  companies?: Company[];
  leadStatements?: string[];
  institutions?: Institution[];
  additionalExperience?: AdditionalExperience;
}

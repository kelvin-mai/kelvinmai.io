import { FluidObject } from 'gatsby-image';

export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url?: string;
}

export interface BasicInfo {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface WorkInfo {
  name: string;
  location: string;
  description?: string;
  position: string;
  url: string;
  startDate: string | Date;
  endDate?: string | Date;
  summary: string;
  highlights: string[];
}

export interface VolunteerInfo {
  organization: string;
  position: string;
  url: string;
  startDate: string | Date;
  endDate?: string | Date;
  summary: string;
  highlights: string[];
}

export interface EducationInfo {
  institution: string;
  area: string;
  location: string;
  studyType: string;
  startDate: string | Date;
  endDate?: string | Date;
  gpa?: string;
  courses: string[];
}

export interface Award {
  title: string;
  date: string | Date;
  awarder: string;
  summary: string;
}

export interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
}

export interface Skill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Interest {
  name: string;
  keywords: string[];
}

export interface Reference {
  name: string;
  reference: string;
}

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  keywords: string[];
  startDate: string | Date;
  endDate: string | Date;
  url: string;
  roles: string[];
  entity: string;
  type: string;
}

export interface JSONResumeSchema {
  basics: Partial<BasicInfo>;
  work: WorkInfo[];
  volunteer: VolunteerInfo[];
  education: EducationInfo[];
  awards: Award[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
  projects: Project[];
}

export type Resume = Partial<JSONResumeSchema>;

export interface ImageData {
  childImageSharp: {
    fluid: FluidObject;
  };
}

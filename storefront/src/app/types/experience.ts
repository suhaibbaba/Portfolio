import { SectionHeadingModel } from "@app/types";

export interface ExperienceEntryModel {
  designation: string;
  company: string;
  duration: string;
  employmentType: string;
  companyTitle: string;
  companyDescription: string;
}

export interface ExperienceSectionModel {
  sectionHeading: SectionHeadingModel;
  allExperience: ExperienceEntryModel[];
}

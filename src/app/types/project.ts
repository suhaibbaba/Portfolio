import { SectionHeadingModel } from "@app/types";

export interface ProjectDetailsModel {
  title: string;
  description: string;
  type: string;
  languages: string;
  platform: string;
  country: string;
  url: string;
}

export interface ProjectModel {
  thumbUrl: string;
  title: string;
  subTitle: string;
  details: ProjectDetailsModel;
}

export interface ProjectsSection {
  sectionHeading: SectionHeadingModel;
  allProjects: ProjectModel[];
}

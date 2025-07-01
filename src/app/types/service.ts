import { SectionHeadingModel } from "@app/types";

export interface ServiceModel {
  imgUrl: string;
  title: string;
  subTitle: string;
  icon: string;
  ratings: number;
}

export interface ServicesSectionModel {
  sectionHeading: SectionHeadingModel;
  allServices: ServiceModel[];
}

import { SectionHeadingModel } from "@app/types";

export interface TestimonialModel {
  reviewText: string;
  avatarImage: string;
  avatarName: string;
  avatarCompany: string;
}

export interface TestimonialsSectionModel {
  sectionHeading: SectionHeadingModel;
  allTestimonials: TestimonialModel[];
}

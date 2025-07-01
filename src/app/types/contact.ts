import { SectionHeadingModel } from "@app/types";

export interface ContactDetailModel {
  title: string;
  email?: string;
  tel?: string;
}

export interface ContactSectionModel {
  sectionHeading: SectionHeadingModel;
  contactImagePath: string;
  contactDetails: ContactDetailModel[];
}

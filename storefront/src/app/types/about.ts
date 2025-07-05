export interface HighlightModel {
  label: string;
  value: number;
}

export interface AboutSectionModel {
  bannerImagePath: string;
  sectionSubtitle: string;
  headingHtml: string;
  description: string;
  highlights: HighlightModel[];
  buttonText: string;
  buttonLink: string;
}

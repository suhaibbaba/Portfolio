import React from "react";
import parser from "html-react-parser";
import { SectionHeadingModel } from "@app/types";

interface SectionHeadingProps extends SectionHeadingModel {
  variant?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  variant,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${variant ? variant : ""}`}>
      <h6
        data-aos={variant === "text-center" ? "fade-up" : "fade-right"}
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <span>{subtitle}</span>
      </h6>
      <h2>{parser(title)}</h2>
    </div>
  );
}

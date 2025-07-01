import { Icon } from "@iconify/react";
import React from "react";
import { SocialLinkModel } from "@app/types";
import Link from "next/link";

interface Props {
  variant?: string;
  socialLinks: SocialLinkModel[];
}

export default function SocialButton({ variant, socialLinks }: Props) {
  return (
    <div
      className={`social-icon ${variant ? variant : ""}`}
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      {socialLinks?.map((item, index) => (
        <Link
          className={item.iconBackgroundClassName}
          href={item.href}
          key={index}
          target="_blank"
        >
          <Icon icon={item.icon} />
        </Link>
      ))}
    </div>
  );
}

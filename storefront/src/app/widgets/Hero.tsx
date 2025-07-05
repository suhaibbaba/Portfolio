import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { HeroSectionModel, SocialLinkModel } from "@app/types";
import SocialButton from "@app/widgets/SocialButton";

const ScrollLink = dynamic(
  () => import("react-scroll").then((mod) => mod.Link),
  { ssr: false },
);

interface Props extends HeroSectionModel {
  socialLinks: SocialLinkModel[];
}

const Hero = ({
  heroImageUrl,
  name,
  heading,
  typingSegments,
  description,
  buttonLabel,
  buttonUrl,
  socialLinks,
}: Props) => {
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{name}</span>
              </h6>

              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {heading}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={typingSegments}
                  speed={1}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  to={buttonUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                >
                  <span>{buttonLabel}</span>
                  <i className="d-flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
                <SocialButton
                  socialLinks={socialLinks}
                  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <Image src={heroImageUrl} alt="Admin" width={800} height={800} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

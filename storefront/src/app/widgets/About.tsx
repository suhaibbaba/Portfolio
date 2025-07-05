import { Icon } from "@iconify/react";
import React, { FC } from "react";
import parser from "html-react-parser";

import dynamic from "next/dynamic";
import { AboutSectionModel } from "@app/types";

const ScrollLink = dynamic(
  () => import("react-scroll").then((mod) => mod.Link),
  { ssr: false },
);

type Props = AboutSectionModel;

const About: FC<Props> = ({
  bannerImagePath,
  sectionSubtitle,
  headingHtml,
  description,
  highlights,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        <div className="row align-items-center justify-content-center gy-5">
          <div
            className="col-lg-6 col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="about-banner text-center">
              <img src={bannerImagePath} alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading">
                {sectionSubtitle && (
                  <h6>
                    <span>{sectionSubtitle}</span>
                  </h6>
                )}

                {headingHtml && <h2>{parser(headingHtml)}</h2>}
              </div>
              <p>{description}</p>
              <div className="review-box">
                {highlights?.map((item, index) => (
                  <div className="r-box" key={index}>
                    <h3>
                      {item.value}
                      <span>+</span>
                    </h3>
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
              <div className="btn-bar">
                <ScrollLink
                  to={buttonLink}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn"
                >
                  <span>{buttonText}</span>
                  <i>
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

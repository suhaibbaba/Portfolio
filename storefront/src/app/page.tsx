"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@public/styles/style.scss";
import Hero from "@app/widgets/Hero";
import About from "@app/widgets/About";
import Projects from "@app/widgets/Projects";
import Service from "@app/widgets/Service";
import Experience from "@app/widgets/Experience";
import Testimonial from "@app/widgets/Testimonial";
import Contact from "@app/widgets/Contact";
import homePageData from "../data/HomePagdData.json";
import "aos/dist/aos.css";
import Aos from "aos";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="">
      <Hero {...homePageData.hero} socialLinks={homePageData.socialLinks} />
      <About {...homePageData.about} />
      <Projects {...homePageData.projects} />
      <Service {...homePageData.service} />
      <Experience {...homePageData.experience} />
      <Testimonial {...homePageData.testimonial} />
      <Contact
        {...homePageData.contact}
        socialLinks={homePageData.socialLinks}
      />
    </div>
  );
}

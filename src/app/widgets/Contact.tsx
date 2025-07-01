import React, { FC } from "react";
import ContactInfo from "@app/widgets/ContactInfo";
import ContactForm from "@app/widgets/ContactForm";
import { ContactSectionModel, SocialLinkModel } from "@app/types";
import SocialButton from "@app/widgets/SocialButton";

type Props = ContactSectionModel & {
  socialLinks: SocialLinkModel[];
};

const Contact: FC<Props> = ({
  sectionHeading,
  contactDetails,
  contactImagePath,
  socialLinks,
}) => {
  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded oveflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{sectionHeading.title}</h5>
                <p className="m-0">{sectionHeading.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-8">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 pe-md-5">
              <div className="contact-banner d-none d-lg-block">
                <img src={contactImagePath} alt="Avatar" />
              </div>
              <ContactInfo contactDetails={contactDetails} />
              <SocialButton socialLinks={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

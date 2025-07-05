import React, { FC } from "react";
import Link from "next/link";
import { ContactDetailModel } from "@app/types";

interface Props {
  contactDetails: ContactDetailModel[];
}

const ContactInfo: FC<Props> = ({ contactDetails }) => {
  return (
    <div className="contact-info">
      {contactDetails.map((item, index) => (
        <div
          className="contact-info-in"
          key={index}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={index * 100}
        >
          <label>{item.title}</label>
          {item.email && (
            <Link href={`mailto:${item.email}`}>{item.email}</Link>
          )}
          {item.tel && <Link href={`tel:${item.tel}`}>{item.tel}</Link>}
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

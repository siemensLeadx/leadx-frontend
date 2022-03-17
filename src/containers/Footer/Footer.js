import React from "react";
import policy from "../../assets/policy/LeadX_Privacy_PolicyEn.pdf";
import policyAr from "../../assets/policy/LeadX_Privacy_PolicyAr.pdf";
import terms from "../../assets/policy/LeadX_Terms_ConditionsEn.pdf";
import termsAr from "../../assets/policy/LeadX_Terms_ConditionsAr.pdf";
import "./Footer.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const { locale } = useSelector((state) => state);
  const { lang } = locale;
  return (
    <div className="footer-container">
      <hr className="m-0" />
      <p className="greyColor Siemens-Sans font-size-13 m-0">
        <span>
          {" "}
          Siemens Healthineers LeadX ©2022 | Corporate Information |{" "}
        </span>{" "}
        <a
          href={lang === "ar" ? policyAr : policy}
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href={lang === "ar" ? termsAr : terms} target="_blank"  rel="noopener noreferrer">
          Terms of Use
        </a>
      </p>
    </div>
  );
};

export default Footer;

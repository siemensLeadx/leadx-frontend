import React from "react";
import policy from "../../assets/policy/Privacy Policy_SHS Websites (track-change- legalcompliance review 01032022)_English (LeadX).pdf";
import policyAr from "../../assets/policy/Privacy Policy_SHS Websites (track-change- legalcompliance review 01032022)_Arabic (Leadx)-converted.pdf";
import terms from "../../assets/policy/LeadX Terms and Conditions (Draft)_200222 (English).pdf";
import termsAr from "../../assets/policy/LeadX Terms and Conditions (Draft)_200222 (Arabic).pdf";
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
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href={lang === "ar" ? termsAr : terms} target="_blank">
          Terms of Use
        </a>
      </p>
    </div>
  );
};

export default Footer;

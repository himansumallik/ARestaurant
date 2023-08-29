import React from "react";
import FooterIconsInfo from "./FooterIcons";
import FooterContact from "./FooterContact";
import FooterForm from "./FooterForm"

const Footer = () => {
  return (
    <>
      <FooterContact/>
      <FooterForm/>
      <FooterIconsInfo/>
    </>
  );
};

export default Footer;
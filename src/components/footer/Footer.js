import React from "react";
import SocialLinks from "../footer/socialLinks/SocialLinks";
import "../../sass/components/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <SocialLinks />
      <p>&#169; Copyright Ping. All rights reserved.</p>
    </div>
  );
}

export default Footer;

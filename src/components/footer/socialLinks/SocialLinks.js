import React from "react";
import "../../../sass/components/SocialLinks.scss";
import { SocialData } from "../../../data/socialLinks-data";

function SocialLinks() {
  const data = SocialData;
  return (
    <div className="social-links">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-links-container">
              <img src={item.icon} className="social-link" alt="social-link" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;

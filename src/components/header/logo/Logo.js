import React from "react";
import "../../../sass/components/Logo.scss";
import logo from "../../../assets/images/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;

import React from "react";
import Logo from "../header/logo/Logo";
import Headline from "../header/headline/Headline";
import "../../sass/components/Header.scss";

function Header() {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <div>
        <Headline />
      </div>
    </div>
  );
}

export default Header;

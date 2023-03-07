import React from "react";
import "./Header.css";
import Logo from "../images/Logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} />
    </div>
  );
}

export default Header;

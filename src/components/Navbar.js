import React from "react";
import logo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={logo} alt="logo" />
      <h3 className=" nav--logo_text">ReactFacts</h3>
      <h4 className=" nav--title">react course Project 1</h4>
    </nav>
  );
}

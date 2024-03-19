import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import BurgerMenu from "./BurgerMenu";
import SideBarMenu from "./SideBarMenu";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSidebarLinkClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Logo" />
      <ul className="navlinks">
        <a href="#home" className="navlink">
          Home
        </a>
        <a href="#services" className="navlink">
          Services
        </a>
        <a href="#about" className="navlink">
          About
        </a>
        <a href="#contact" className="navlink">
          Contact
        </a>
      </ul>
      <BurgerMenu onClick={toggleNav} isOpen={isNavOpen} />
      <SideBarMenu isOpen={isNavOpen} onLinkClick={handleSidebarLinkClick} />
    </div>
  );
}
export default Navbar;

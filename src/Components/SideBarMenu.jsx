import React from "react";

function SideBarMenu({ isOpen, onLinkClick }) {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <a href="#home" className="sidebar-link" onClick={onLinkClick}>
        Home
      </a>
      <a href="#services" className="sidebar-link" onClick={onLinkClick}>
        Services
      </a>
      <a href="#about" className="sidebar-link" onClick={onLinkClick}>
        About
      </a>
      <a href="#contact" className="sidebar-link" onClick={onLinkClick}>
        Contact
      </a>
    </div>
  );
}

export default SideBarMenu;

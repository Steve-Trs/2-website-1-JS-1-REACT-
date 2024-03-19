import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="footer">
      <span className="logo-footer">
        <img src={logo} alt="logo" />
      </span>
      <p className="text-footer">&copy; {currentYear}. All rights reserved</p>
    </div>
  );
}
export default Footer;

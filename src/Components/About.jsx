import React from "react";
import picture from "../assets/logo.png";

function About() {
  return (
    <div className="about" id="about">
      <h1 className="title-about">About Us</h1>
      <div className="about-container">
        <img src={picture} alt="logo" className="logo-about" />

        <div className="about-info">
          <h2>Creative Technology</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            iure quo molestiae laboriosam voluptate eligendi cumque dolores
            distinctio officiis, fugit fugiat ea dignissimos consequuntur porro
            sint? Veritatis repellat consequuntur quasi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Unde iste minima excepturi
            consequuntur aspernatur aliquid nulla totam rem quidem facilis quas,
            enim commodi maxime, eos error eveniet iusto! Ad, laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;

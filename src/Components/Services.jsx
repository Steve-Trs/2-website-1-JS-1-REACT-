import React from "react";
import image1 from "../assets/laptop-img.webp";
import image2 from "../assets/pc-img.webp";
import image3 from "../assets/code-img.webp";

function Services() {
  return (
    <div className="services" id="services">
      <div className="box-service box1">
        <div className="box-img-service">
          <img src={image1} alt="laptop" />
        </div>
        <div className="box-text-service">
          <h2>Service 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            debitis ipsa delectus, ducimus perferendis modi distinctio sint
            nulla fuga molestiae necessitatibus est sunt, quam a numquam
            reiciendis tempora iste obcaecati.
          </p>
        </div>
      </div>
      <div className="separator"></div>
      <div className="box-service box2">
        <div className="box-text-service">
          <h2>Service 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            debitis ipsa delectus, ducimus perferendis modi distinctio sint
            nulla fuga molestiae necessitatibus est sunt, quam a numquam
            reiciendis tempora iste obcaecati.
          </p>
        </div>
        <div className="box-img-service">
          <img src={image2} alt="computer" />
        </div>
      </div>
      <div className="separator"></div>
      <div className="box-service box3">
        <div className="box-img-service">
          <img src={image3} alt="laptop" />
        </div>
        <div className="box-text-service">
          <h2>Service 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            debitis ipsa delectus, ducimus perferendis modi distinctio sint
            nulla fuga molestiae necessitatibus est sunt, quam a numquam
            reiciendis tempora iste obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;

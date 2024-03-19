import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="title-contact">Contact Us</h1>
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="separator"></div>
          <p>
            <b>Email:</b> example@example.com
          </p>
          <p>
            <b>Telephone:</b> +1234567890
          </p>
          <p>
            <b>Address:</b> 123 Street, City, Country
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          {/* Your contact form JSX goes here */}
          <form>
            <label htmlFor="name">
              <b>Name:</b>
            </label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">
              <b>Message:</b>
            </label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;

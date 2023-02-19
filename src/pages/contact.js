import React from "react";
import "../App.css";
import "./contact.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export var Contact = (props) => {
  return (
    <div className="contact">
      <div className="talk-to-me">Talk To Me!</div>
      <div className="contact-info-container">
        <div className="pro-pic" />
        <div className="contact-text-container">
          <div className="contact-description">
            Hello! My name is Mariel Quadrino, and I’m a communication designer
            based in Brooklyn, NY. For project inquiries feel free to email me{" "}
            <a href="mailto: mckaylalankau@gmail.com" target="_blank">
              (marielquadrino@gmail.com)
            </a>{" "}
            or DM me on Instagram or LinkedIn.
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <a href="mailto: mckaylalankau@gmail.com" target="_blank">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/mariel_jpg/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mariel-quadrino/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

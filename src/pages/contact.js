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
            <a
              href="mailto: marielquadrino@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              (mquadrino99@gmail.com)
            </a>{" "}
            or DM me on Instagram or LinkedIn.
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <a
              href="mailto: mquadrino99@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/mariel_jpg/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mariel-quadrino/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "../App.css";
import "./contact.css";

export var Contact = (props) => {
  return (
    <div
      className="contact"
      style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 60,
      }}
    >
      <div className="talk-to-me">Talk To Me!</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60vw",
          gap: 60,
        }}
      >
        <div className="pro-pic" />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: 60,
          }}
        >
          <div className="contact-description">
            My name is Mariel Quadrino, and I’m a communication
            designer based in Brooklyn, NY. For any project inquiries feel free to email me or DM me through the links below.
          </div>
          <div>socials</div>
        </div>
      </div>
    </div>
  );
};

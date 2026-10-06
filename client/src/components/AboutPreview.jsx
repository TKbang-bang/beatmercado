import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

function AboutPreview() {
  return (
    <section className="about_preview container">
      <div className="about_preview_content">
        <h2>About Lil Adams</h2>

        <p>
          Lil Adams is a beatmaker, producer and singer focused on creating
          original sounds for artists looking to take their music further.
        </p>

        <NavLink to="/about">Learn more</NavLink>
      </div>
    </section>
  );
}

export default AboutPreview;

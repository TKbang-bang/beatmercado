import React from "react";
import { NavLink } from "react-router-dom";
import "../views/about.css";
import lilAdams from "../assets/adams.png";

function AboutPreview() {
  return (
    <section className="about_section about_intro">
      <div className="container">
        <div className="about_image">
          <div className="image_circle">
            <img src={lilAdams} alt="Lil Adams" />
          </div>
        </div>

        <div className="about_text">
          <span className="about_number">ABOUT ME</span>

          <h2>Where It All Started</h2>

          <p>
            Lil Adams' journey into music began with something simple: a
            computer he received as a gift. What started as a new piece of
            technology to explore gradually became the tool that introduced him
            to an entirely different world — music production.
          </p>

          <p>
            As he spent more time discovering how music was made, his curiosity
            grew. He became interested not only in listening to music, but also
            in understanding what happened behind it: how sounds were selected,
            how melodies and rhythms were combined, and how a beat could give a
            song its identity.
          </p>

          <p>
            That interest naturally led him toward beatmaking. He began learning
            through experimentation and practice, becoming more familiar with
            the tools and techniques needed to produce music. There was no
            perfect formula from the beginning. He learned by creating,
            listening, making mistakes, trying again, and constantly looking for
            ways to improve.
          </p>

          <p>
            What began as curiosity slowly became a genuine passion for music
            production and the desire to develop a sound of his own.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;

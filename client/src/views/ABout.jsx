import React from "react";
import "./about.css";
import lilAdams from "../assets/adams.png";

function About() {
  return (
    <main className="about">
      {/* =================================
          01 — ABOUT ME
      ================================= */}

      <section className="about_section about_intro">
        <div className="container">
          <div className="about_image">
            <div className="image_circle">
              <img src={lilAdams} alt="Lil Adams" />
            </div>
          </div>

          <div className="about_text">
            <span className="about_number">01: ABOUT ME</span>

            <h2>Where It All Started</h2>

            <p>
              Lil Adams' journey into music began with something simple: a
              computer he received as a gift. What started as a new piece of
              technology to explore gradually became the tool that introduced
              him to an entirely different world — music production.
            </p>

            <p>
              As he spent more time discovering how music was made, his
              curiosity grew. He became interested not only in listening to
              music, but also in understanding what happened behind it: how
              sounds were selected, how melodies and rhythms were combined, and
              how a beat could give a song its identity.
            </p>

            <p>
              That interest naturally led him toward beatmaking. He began
              learning through experimentation and practice, becoming more
              familiar with the tools and techniques needed to produce music.
              There was no perfect formula from the beginning. He learned by
              creating, listening, making mistakes, trying again, and constantly
              looking for ways to improve.
            </p>

            <p>
              What began as curiosity slowly became a genuine passion for music
              production and the desire to develop a sound of his own.
            </p>
          </div>
        </div>
      </section>

      {/* =================================
          02 — FROM BEATS TO MUSIC
      ================================= */}

      <section className="about_section about_evolution">
        <div className="container">
          <div className="about_heading">
            <span className="about_number">02: FROM BEATS TO MUSIC</span>

            <h2>From Learning to Creating</h2>
          </div>

          <div className="about_text about_text_wide">
            <p>
              As his skills developed, making beats stopped being only a
              personal learning experience and became something he could share
              with other artists. He began creating beats for other people,
              collaborating with different artists and developing music with the
              intention of giving each song a strong foundation.
            </p>

            <p>
              Over time, some of those beats also became available for sale.
              This marked an important step in his journey. Music production was
              no longer simply something he enjoyed doing in his free time; it
              was becoming part of his creative career and a way to connect with
              other artists who were looking for sounds to build their own music
              around.
            </p>

            <p>
              At the same time, Lil Adams continued exploring music from another
              side — as an artist himself. Many of the songs he has created
              feature his own voice, with Lil Adams performing over beats that
              he produced himself. Being both behind the production and in front
              of the microphone has allowed him to understand the creative
              process from both perspectives.
            </p>

            <p>
              That combination has shaped the way he approaches his music. He is
              not only thinking about how a beat sounds on its own, but also
              about how it can support a voice, create an atmosphere, and become
              part of a complete song. Every production becomes another
              opportunity to experiment, improve, and develop a sound that feels
              authentic to him.
            </p>
          </div>
        </div>
      </section>

      {/* =================================
          03 — BUILDING WHAT'S NEXT
      ================================= */}

      <section className="about_section about_present">
        <div className="container">
          <div className="about_heading">
            <span className="about_number">03: BUILDING WHAT'S NEXT</span>

            <h2>Building What Comes Next</h2>
          </div>

          <div className="about_text about_text_wide">
            <p>
              Today, Lil Adams is continuing to take that journey further. He is
              currently building his own studio, a space designed not only for
              producing beats, but also for recording and developing music from
              the early stages of an idea to a finished song.
            </p>

            <p>
              The studio represents another important step forward in his
              career. Having a dedicated space gives him the opportunity to work
              more consistently, experiment with new ideas, record his own
              music, and create an environment where creativity can grow.
            </p>

            <p>
              Alongside building that space, he continues producing new beats,
              expanding his catalog, and making his work available to artists
              who are looking for new sounds. His productions are also being
              shared through social media, allowing his music to reach more
              listeners and artists beyond his immediate surroundings.
            </p>

            <p>
              The journey is still being built. From a computer that first
              introduced him to music production, to producing beats for other
              artists, selling his work, performing over his own productions,
              and now creating his own studio, each stage has been another step
              toward turning a passion into something bigger.
            </p>

            <p>
              For Lil Adams, the goal is not simply to make more beats. It is to
              continue developing as a producer and artist, create music that
              connects with people, and build a space where ideas can become
              real songs.
            </p>

            <a
              href="https://www.beatstars.com/beatmercado"
              target="_blank"
              rel="noopener noreferrer"
              className="beatstars_link"
            >
              Explore my beats
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

import React from "react";
import "./components.css";
import {
  ArrowRightIcon,
  BeatstarsIcon,
  InstagramIcon,
  ShopIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../icons/SVG";

function Hero() {
  return (
    <section className="hero container">
      <div className="info_container">
        <h1 className="title">Mercado Beats</h1>
        <h3>Beats made by</h3>
        <h2 className="artist_name">Lil Adams</h2>
        <h3>Beat Maker, Producer & Singer</h3>
        <p>
          Discover original beats crafted for artists ready to find their sound,
          build their next record, and take their music further.
        </p>

        <div className="contact_icons">
          <div className="url_container">
            <a href="" target="_blank">
              <YoutubeIcon />
            </a>
            <p>Youtube</p>
          </div>

          <div className="url_container">
            <a href="" target="_blank">
              <InstagramIcon />
            </a>
            <p>Instagram</p>
          </div>

          <div className="url_container">
            <a href="" target="_blank">
              <TiktokIcon />
            </a>
            <p>Tiktok</p>
          </div>

          <a
            href={`${import.meta.env.VITE_AUDIOS_URL}`}
            className="buy"
            target="_blank"
          >
            <ShopIcon />
            <p>Buy beats</p>
            <ArrowRightIcon />
          </a>

          {/* <div className="url_container">
            <a href="" target="_blank" className="b">
              <BeatstarsIcon />
            </a>
            <p>BeatStars</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;

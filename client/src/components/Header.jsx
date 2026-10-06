import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../icons/SVG";
import "./components.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    document.querySelector("header").classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    document.querySelector("header").classList.remove("active");
    document.body.style.overflow = "";
  };

  return (
    <header className={`header container ${scrolled ? "scrolled" : ""}`}>
      <NavLink to="/" className="logo_link">
        <h1 className="logo">Beat Mercado</h1>
      </NavLink>

      <button className="svg_container menu mobile" onClick={handleMenu}>
        <MenuIcon />
      </button>

      <div className="menu_items">
        <div className="menu_container">
          <div className="close_container">
            <button
              className="svg_container close mobile"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/beats">Beats</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../icons/SVG";
import "./components.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const homePath = pathname === "/" ? "" : "/";
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`header container ${scrolled ? "scrolled" : ""} ${menuOpen ? "active" : ""}`}
    >
      <a href={`${homePath}#inicio`} className="logo_link" onClick={closeMenu}>
        <span className="logo">beat<span>mercado</span></span>
      </a>

      <button
        className="svg_container menu mobile"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <MenuIcon />
      </button>

      <div className="menu_items">
        <div className="menu_container">
          <div className="close_container">
            <button
              className="svg_container close mobile"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <CloseIcon />
            </button>
          </div>

          <a href={`${homePath}#inicio`} onClick={closeMenu}>Inicio</a>
          <a href={`${homePath}#servicios`} onClick={closeMenu}>Servicios</a>
          <a href={`${homePath}#beats`} onClick={closeMenu}>Beats</a>
          <a href={`${homePath}#sobre-mi`} onClick={closeMenu}>Sobre mí</a>
          <a href={`${homePath}#contacto`} className="nav-contact" onClick={closeMenu}>Contacto <span>↗</span></a>
        </div>
      </div>
    </header>
  );
}

export default Header;

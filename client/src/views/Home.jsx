import { useEffect } from "react";
import Contact from "./Contact";
import studioPortrait from "../assets/p3.jpg";
import studioWide from "../assets/p1.jpg";
import swth from "../assets/SweetHeat.webp";
import mjl from "../assets/MaJolie.webp";
import wfy from "../assets/Wifey.webp";
import studioMixer from "../assets/p4.jpg";
import "./landing.css";

const beatStore =
  import.meta.env.VITE_AUDIOS_URL || "https://www.beatstars.com/beatmercado";

const services = [
  {
    number: "01",
    title: "Beats a tu medida",
    description:
      "Producciones originales construidas alrededor de tu voz, tu historia y el sonido que quieres llevar al mundo.",
    icon: "♫",
  },
  {
    number: "02",
    title: "Beats para comprar",
    description:
      "Encuentra el ritmo indicado, escúchalo en BeatStars y elige la licencia que mejor acompaña tu proyecto.",
    icon: "◉",
  },
  {
    number: "03",
    title: "Grabación en estudio",
    description:
      "Un espacio creativo para grabar voces, explorar ideas y transformar una maqueta en una canción completa.",
    icon: "⌁",
  },
  {
    number: "04",
    title: "Revisión de beats",
    description:
      "Una escucha honesta y detallada para detectar oportunidades y llevar tu producción un paso más allá.",
    icon: "↗",
  },
  {
    number: "05",
    title: "Mezcla y acabado",
    description:
      "Balance, claridad y carácter para que cada elemento encuentre su lugar y tu música se sienta terminada.",
    icon: "◌",
  },
];

const beats = [
  {
    title: "Ma Jolie",
    genre: "Afro",
    bpm: "102 BPM",
    tone: "violet",
    artwork: mjl,
    to: "https://www.beatstars.com/beat/ma-jolie-10391295",
  },
  {
    title: "Sweet Heart",
    genre: "Afro Kompas",
    bpm: "93 BPM",
    tone: "orange",
    artwork: swth,
    to: "https://www.beatstars.com/beat/sweet-heart-11029681",
  },
  {
    title: "Wifey",
    genre: "Afro",
    bpm: "105 BPM",
    tone: "blue",
    artwork: wfy,
    to: "https://www.beatstars.com/beat/wifey-10391142",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 4l6 6-6 6" />
    </svg>
  );
}

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="landing">
      <section className="landing-hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              <span className="eyebrow-line" />
              BEATS CON IDENTIDAD
            </p>
            <h1 className="hero-title reveal">
              Tu próxima
              <br />
              historia empieza
              <br />
              <span>con un beat.</span>
            </h1>
            <p className="hero-description reveal">
              Soy <strong>Lil Adams</strong>, productor, beatmaker y artista.
              Creo sonidos para quienes tienen algo que decir.
            </p>
            <div className="hero-actions reveal">
              <a
                className="button button-primary"
                href={beatStore}
                target="_blank"
              >
                Escucha los beats <ArrowIcon />
              </a>
              <a className="text-link" href="#sobre-mi">
                Conoce mi historia <span>↘</span>
              </a>
            </div>
            <div className="hero-meta reveal">
              <span className="live-dot" />
              DISPONIBLE PARA NUEVOS PROYECTOS
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-image">
              <img src={studioPortrait} alt="Lil Adams en el estudio" />
            </div>
            <div className="hero-stamp">
              <span>BEAT</span>
              <span className="stamp-star">✳</span>
              <span>MERCADO</span>
            </div>
            <div className="hero-note">
              <span className="note-bars" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => (
                  <i key={index} style={{ "--bar": (index % 5) + 1 }} />
                ))}
              </span>
              <span>
                SONIDO ORIGINAL
                <br />
                HECHO PARA TI
              </span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#servicios">
          <span>BAJA Y EXPLORA</span>
          <i />
        </a>
      </section>

      <div className="ticker" aria-label="Beatmaking, grabación y mezcla">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, repeat) => (
            <span key={repeat}>
              BEATMAKING <b>✳</b> GRABACIÓN <b>✳</b> MEZCLA <b>✳</b> SONIDO
              PROPIO <b>✳</b> BEATMAKING <b>✳</b> GRABACIÓN <b>✳</b> MEZCLA{" "}
              <b>✳</b> SONIDO PROPIO <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="section services-section" id="servicios">
        <div className="section-shell">
          <div className="section-heading reveal">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              LO QUE HACEMOS
            </p>
            <div className="heading-row">
              <h2>
                Del primer loop
                <br />
                <span>a la última toma.</span>
              </h2>
              <p className="section-intro">
                Cada proyecto necesita algo distinto. Aquí tienes el espacio,
                las herramientas y el oído para encontrarlo.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="service-card reveal"
                key={service.number}
                style={{ "--delay": `${index * 90}ms` }}
              >
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href="#contacto"
                  aria-label={`Consultar por ${service.title}`}
                >
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section beats-section" id="beats">
        <div className="section-shell">
          <div className="section-heading reveal">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              SELECCIÓN DE LA CASA
            </p>
            <div className="heading-row">
              <h2>
                Dale play
                <br />
                <span>a tu próximo hit.</span>
              </h2>
              <a
                className="text-link store-link"
                href={beatStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todo el catálogo <span>↗</span>
              </a>
            </div>
          </div>

          <div className="beats-grid">
            {beats.map((beat, index) => (
              <article
                className="beat-card reveal"
                key={beat.title}
                style={{ "--delay": `${index * 110}ms` }}
              >
                <a
                  className={`beat-artwork ${beat.tone}`}
                  href={beat.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Escuchar ${beat.title} en BeatStars`}
                >
                  <img
                    src={beat.artwork}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = studioWide;
                    }}
                  />
                  <span className="beat-play" aria-hidden="true">
                    ▶
                  </span>
                  <span className="beat-wave" aria-hidden="true">
                    {Array.from({ length: 28 }, (_, bar) => (
                      <i
                        key={bar}
                        style={{ "--wave": `${18 + ((bar * 29) % 63)}%` }}
                      />
                    ))}
                  </span>
                  <span className="beat-index">0{index + 1} / 03</span>
                </a>
                <div className="beat-info">
                  <div>
                    <p className="beat-genre">
                      {beat.genre} <span>·</span> {beat.bpm}
                    </p>
                    <h3>{beat.title}</h3>
                  </div>
                  <a
                    className="beat-buy"
                    href={beat.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Escuchar y comprar ${beat.title} en BeatStars`}
                  >
                    ↗
                  </a>
                </div>
                <p className="beat-listen-note">
                  Escuchar y comprar en BeatStars
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="sobre-mi">
        <div className="about-image reveal">
          <img
            src={studioWide}
            alt="Lil Adams trabajando en su estudio"
            loading="lazy"
          />
          <span className="image-caption">EN EL ESTUDIO — SIEMPRE CREANDO</span>
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            DE CURIOSIDAD A VOCACIÓN
          </p>
          <h2>
            Detrás de cada
            <br />
            beat hay una
            <br />
            <span>historia.</span>
          </h2>
          <p>
            Todo empezó con una computadora y una pregunta: ¿cómo se construye
            una canción? Lo que comenzó como curiosidad se convirtió en horas de
            experimentar, escuchar y aprender a crear música desde cero.
          </p>
          <p>
            Hoy, Lil Adams produce para otros artistas, vende beats y también
            graba su propia voz sobre sus producciones. Esa doble mirada —desde
            la consola y desde el micrófono— guía cada decisión: el beat no solo
            tiene que sonar bien, tiene que dejar espacio para que alguien
            cuente algo real.
          </p>
          <p>
            La meta es seguir creciendo, construir un estudio propio y crear un
            lugar donde una idea pueda convertirse en una canción terminada.
            Cada colaboración es una nueva oportunidad para hacerlo.
          </p>
          <a className="text-link about-cta" href="/about">
            Lee más sobre mi camino <span>↗</span>
          </a>
        </div>
      </section>

      <section id="contacto" className="contact-anchor">
        <div className="contact-intro reveal">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            TU IDEA MERECE SONAR
          </p>
          <h2>
            ¿Listo para
            <br />
            <span>crear algo?</span>
          </h2>
          <p>
            Cuéntame qué tienes en mente. Un beat, una sesión o simplemente
            empezar a hablar de música: estoy aquí para escucharte.
          </p>
          <div className="contact-note">
            <span className="live-dot" />
            RESPUESTA PERSONAL, SIEMPRE
          </div>
        </div>
        <Contact />
      </section>

      <footer className="site-footer">
        <a className="footer-logo" href="#inicio">
          beat<span>mercado</span>
        </a>
        <p>Hecho con intención. Sonando en todas partes.</p>
        <a href="#inicio" className="back-top">
          VOLVER ARRIBA ↑
        </a>
      </footer>
    </main>
  );
}

export default Home;

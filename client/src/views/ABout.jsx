import { useEffect } from "react";
import { Link } from "react-router-dom";
import lilAdams from "../assets/adams.png";
import studioPortrait from "../assets/p3.jpg";
import studioWide from "../assets/p1.jpg";
import studioMixer from "../assets/p4.jpg";
import "./about-page.css";

const beatStore =
  import.meta.env.VITE_AUDIOS_URL || "https://www.beatstars.com/beatmercado";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");
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
    <main className="about-page">
      <section className="about-masthead">
        <div className="about-masthead-inner">
          <div className="about-masthead-copy">
            <p className="about-eyebrow about-reveal">
              <span /> DETRÁS DEL SONIDO
            </p>
            <h1 className="about-reveal">
              Donde todo
              <br />
              <span>comenzó.</span>
            </h1>
            <p className="about-lead about-reveal">
              Una computadora, mucha curiosidad y el comienzo de un camino en la
              producción musical.
            </p>
            <a className="about-scroll about-reveal" href="#origin">
              <span>DESLIZA PARA EXPLORAR</span>
              <i />
            </a>
          </div>

          <div className="about-masthead-art about-reveal">
            <div className="about-art-frame">
              <img
                className="about-art-background"
                src={studioPortrait}
                alt="Un productor trabajando en el estudio"
              />
              <div className="about-art-shade" />
              <img
                className="about-artist-cutout"
                src={lilAdams}
                alt="Lil Adams"
              />
              <span className="about-art-tag">
                LIL ADAMS · PRODUCTOR / ARTISTA
              </span>
            </div>
            <div className="about-stamp" aria-hidden="true">
              <span>BEAT</span>
              <b>✳</b>
              <span>MERCADO</span>
            </div>
            <span className="about-art-coordinate">01 / EL COMIENZO</span>
          </div>
        </div>
      </section>

      <section className="about-chapter about-origin" id="origin">
        <div className="about-chapter-inner">
          <div className="about-chapter-heading about-reveal">
            <p className="about-eyebrow">
              <span /> 01 — LA PRIMERA CHISPA
            </p>
            <h2>
              Donde todo
              <br />
              <span>comenzó.</span>
            </h2>
            <div className="about-chapter-index">01</div>
          </div>

          <div className="about-prose about-reveal">
            <p>
              El camino de Lil Adams en la música comenzó con algo sencillo: una
              computadora que recibió como regalo. Lo que empezó como una nueva
              tecnología por explorar se convirtió poco a poco en la herramienta
              que lo introdujo a un mundo completamente distinto: la producción
              musical.
            </p>
            <p>
              A medida que descubría cómo se hacía la música, su curiosidad
              crecía. No solo le interesaba escucharla, sino también entender
              qué ocurría detrás: cómo se elegían los sonidos, cómo se
              combinaban melodías y ritmos, y cómo un beat podía darle identidad
              a una canción.
            </p>
            <p>
              Ese interés lo llevó naturalmente al beatmaking. Empezó a aprender
              experimentando y practicando, familiarizándose con las
              herramientas y técnicas necesarias para producir música. Desde el
              principio no hubo una fórmula perfecta. Aprendió creando,
              escuchando, equivocándose, intentándolo de nuevo y buscando
              constantemente cómo mejorar.
            </p>
            <p>
              Lo que comenzó como curiosidad se convirtió poco a poco en una
              verdadera pasión por la producción musical y en el deseo de
              desarrollar un sonido propio.
            </p>
          </div>
        </div>
      </section>

      <section className="about-chapter about-evolution">
        <div className="about-evolution-inner">
          <div className="about-evolution-art about-reveal">
            <img
              src={studioWide}
              alt="Equipo de producción musical en el estudio"
              loading="lazy"
            />
            <span className="about-photo-caption">
              DETRÁS DE CADA SONIDO — UN PROCESO
            </span>
            <div className="about-art-counter">
              02 <span>/ 03</span>
            </div>
          </div>

          <div className="about-evolution-copy">
            <div className="about-chapter-heading about-reveal">
              <p className="about-eyebrow">
                <span /> 02 — DE LOS BEATS A LA MÚSICA
              </p>
              <h2>
                De aprender
                <br />
                <span>a crear.</span>
              </h2>
            </div>
            <div className="about-prose about-reveal">
              <p>
                A medida que desarrollaba sus habilidades, hacer beats dejó de
                ser solo una experiencia personal de aprendizaje y se convirtió
                en algo que podía compartir con otros artistas. Empezó a crear
                beats para otras personas, colaborar con distintos artistas y
                desarrollar música con la intención de darle a cada canción una
                base sólida.
              </p>
              <p>
                Con el tiempo, algunos de esos beats también estuvieron
                disponibles para la venta. Esto marcó un paso importante en su
                camino. La producción musical ya no era solamente algo que
                disfrutaba hacer en su tiempo libre; empezaba a formar parte de
                su carrera creativa y era una manera de conectar con artistas
                que buscaban sonidos para construir su propia música.
              </p>
              <p>
                Al mismo tiempo, Lil Adams siguió explorando la música desde
                otro lado: como artista. Muchas de las canciones que ha creado
                incluyen su propia voz, interpretando sobre beats que él mismo
                produjo. Estar tanto detrás de la producción como frente al
                micrófono le ha permitido entender el proceso creativo desde
                ambas perspectivas.
              </p>
              <p>
                Esa combinación ha definido su manera de acercarse a la música.
                No solo piensa en cómo suena un beat por sí mismo, sino también
                en cómo puede acompañar una voz, crear una atmósfera y formar
                parte de una canción completa. Cada producción es una nueva
                oportunidad para experimentar, mejorar y desarrollar un sonido
                que se sienta auténtico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-chapter about-next">
        <div className="about-next-inner">
          <div className="about-chapter-heading about-reveal">
            <p className="about-eyebrow">
              <span /> 03 — CONSTRUYENDO LO QUE VIENE
            </p>
            <h2>
              Construyendo
              <br />
              <span>lo que viene.</span>
            </h2>
            <div className="about-chapter-index">03</div>
          </div>

          <div className="about-next-content">
            <div className="about-prose about-reveal">
              <p>
                Hoy, Lil Adams sigue llevando ese camino más lejos. Actualmente
                está construyendo su propio estudio: un espacio pensado no solo
                para producir beats, sino también para grabar y desarrollar
                música desde las primeras ideas hasta convertirlas en canciones
                terminadas.
              </p>
              <p>
                El estudio representa otro paso importante en su carrera. Contar
                con un espacio propio le da la oportunidad de trabajar con más
                constancia, experimentar con nuevas ideas, grabar su propia
                música y crear un entorno donde la creatividad pueda crecer.
              </p>
              <p>
                Mientras construye ese espacio, sigue produciendo nuevos beats,
                ampliando su catálogo y compartiendo su trabajo con artistas que
                buscan sonidos nuevos. También difunde sus producciones en redes
                sociales para que su música llegue a más oyentes y artistas, más
                allá de su entorno cercano.
              </p>
              <p>
                El camino todavía se está construyendo. Desde aquella
                computadora que lo acercó por primera vez a la producción
                musical, hasta crear beats para otros artistas, vender su
                trabajo, interpretar sobre sus propias producciones y ahora
                construir su estudio, cada etapa ha sido un paso más para
                convertir una pasión en algo más grande.
              </p>
              <p>
                Para Lil Adams, el objetivo no es simplemente hacer más beats.
                Es seguir creciendo como productor y artista, crear música que
                conecte con las personas y construir un espacio donde las ideas
                puedan convertirse en canciones reales.
              </p>
            </div>
            <div className="about-next-image about-reveal">
              <img
                src={studioMixer}
                alt="Consola de mezcla lista para una nueva grabación"
                loading="lazy"
              />
              <span>EL PRÓXIMO CAPÍTULO ESTÁ EN MARCHA.</span>
            </div>
          </div>
          <a
            href={beatStore}
            target="_blank"
            rel="noopener noreferrer"
            className="about-beatstars-link about-reveal"
          >
            Explora mis beats <span>↗</span>
          </a>
        </div>
      </section>

      <section className="about-outro">
        <div className="about-outro-inner about-reveal">
          <p className="about-eyebrow">
            <span /> TU IDEA, EL PRÓXIMO TEMA
          </p>
          <h2>
            Hagamos
            <br />
            <span>algo real.</span>
          </h2>
          <Link to="/#contact" className="about-contact-link">
            Hablemos <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;

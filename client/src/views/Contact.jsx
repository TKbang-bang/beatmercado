import { useState } from "react";
import "./contact.css";

import { ShopIcon, ArrowRightIcon } from "../icons/SVG";
import { toast } from "sonner";
import { mailSenderService } from "../services/mail.service";

const beatStore =
  import.meta.env.VITE_AUDIOS_URL || "https://www.beatstars.com/beatmercado";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!name || !subject || !email || !message)
      return toast.error("Completa todos los campos");

    try {
      const res = await mailSenderService(name, email, subject, message);
      if (!res.success) throw new Error(res.message);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      return toast.success(res.message);
    } catch (error) {
      console.log(error);
      return toast.error(error.response?.data?.message || "No se pudo enviar el mensaje");
    }
  };

  return (
    <main className="contact container">
      <section className="contact_info">
        <span className="contact_label">HABLEMOS DE MÚSICA</span>

        <h1>
          HAGAMOS
          <br />
          ALGO
          <br />
          <span>INCREÍBLE.</span>
        </h1>

        <p className="contact_description">
          ¿Tienes una idea, buscas un beat a medida o quieres trabajar juntos?
          Cuéntame qué estás creando y hagámoslo realidad.
        </p>

        <a
          href={beatStore}
          className="buy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShopIcon />
          <span>Escucha mis beats</span>
          <ArrowRightIcon />
        </a>
      </section>

      <section className="contact_form_section">
        <div className="contact_form_heading">
          <h2>Envíame un mensaje</h2>
        </div>

        <form className="contact_form" onSubmit={handleSendMail}>
          <div className="form_row">
            <div className="form_field">
              <label htmlFor="contact_name">Tu nombre</label>
              <input
                type="text"
                id="contact_name"
                name="name"
                placeholder="Tu nombre"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form_field">
              <label htmlFor="contact_email">Correo electrónico</label>
              <input
                type="email"
                id="contact_email"
                name="email"
                placeholder="tu@email.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="contact_subject">Asunto</label>
            <input
              type="text"
              id="contact_subject"
              name="subject"
              placeholder="¿Qué tienes en mente?"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="form_field">
            <label htmlFor="contact_message">Tu mensaje</label>
            <textarea
              id="contact_message"
              name="message"
              placeholder="Cuéntame sobre tu proyecto..."
              rows="6"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="contact_submit">
            Enviar mensaje
            <ArrowRightIcon />
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;

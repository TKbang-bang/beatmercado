import React, { useState } from "react";
import "./contact.css";

import {
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  ShopIcon,
  ArrowRightIcon,
} from "../icons/SVG";
import { toast } from "sonner";
import { mailSenderService } from "../services/mail.service";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!name || !subject || !email || !message)
      return toast.error("All feilds are required");

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
      return toast.error(error.response?.data?.message || "Server error");
    }
  };

  return (
    <main className="contact container">
      <section className="contact_info">
        <span className="contact_label">GET IN TOUCH</span>

        <h1>
          LET'S MAKE
          <br />
          SOMETHING
          <br />
          <span>GREAT.</span>
        </h1>

        <p className="contact_description">
          Have a project in mind, looking for a custom beat, or interested in
          working together? I'd love to hear what you're creating. Let's bring
          your ideas to life.
        </p>

        <p className="contact_social_title">CONNECT WITH ME</p>

        <div className="contact_icons">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YoutubeIcon />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TiktokIcon />
          </a>
        </div>

        <a
          href={import.meta.env.VITE_AUDIOS_URL}
          className="buy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShopIcon />
          <span>Explore my beats</span>
          <ArrowRightIcon />
        </a>
      </section>

      <section className="contact_form_section">
        <div className="contact_form_heading">
          <h2>Send me a message</h2>
          {/* <p>
            Fill out the form below and tell me a little about your project.
          </p> */}
        </div>

        <form className="contact_form" onSubmit={handleSendMail}>
          <div className="form_row">
            <div className="form_field">
              <label htmlFor="contact_name">Your name</label>
              <input
                type="text"
                id="contact_name"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form_field">
              <label htmlFor="contact_email">Email address</label>
              <input
                type="email"
                id="contact_email"
                name="email"
                placeholder="john@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form_field">
            <label htmlFor="contact_subject">Subject</label>
            <input
              type="text"
              id="contact_subject"
              name="subject"
              placeholder="What would you like to discuss?"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="form_field">
            <label htmlFor="contact_message">Your message</label>
            <textarea
              id="contact_message"
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="contact_submit">
            Send message
            <ArrowRightIcon />
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;

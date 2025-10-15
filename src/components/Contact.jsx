import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ text: "", color: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "Please fill in all fields.", color: "red" });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ text: "Please enter a valid email address.", color: "red" });
      return;
    }

    setStatus({ text: `Thank you, ${name.trim()}! Your message has been sent.`, color: "green" });
    setForm({ name: "", email: "", message: "" });

    // If you want to actually send the message later, connect an API here.
  };

  return (
    <div className="contact-section">
      <h2>Get In Touch</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <p id="form-status" style={{ color: status.color, textAlign: "center", marginTop: "1rem" }}>
        {status.text}
      </p>
    </div>
  );
}

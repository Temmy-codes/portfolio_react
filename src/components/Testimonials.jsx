import React, { useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    { name: "Priscy", message: "As someone new to Yoga, i was nervous at first, but your vidoes made everything feel so simple. I love how you explained each yoga pose step by step." },
    { name: "Juliana", message: "I love the aspect of me practicing on my own schedule. Your instructions are so clear, and i felt completely at ease. Thank you Temmy!" },
    { name: "Emmanuella", message: "Your prerecorded sessions are perfect for my busy lifestyle. I could pause, rewind, and revisit poses i struggled with. After just one session, i felt a difference in my body, like my body was so stiff, now im seeing difference." }
  ]);

  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setTestimonials(prev => [...prev, { name: form.name.trim(), message: form.message.trim() }]);
    setForm({ name: "", message: "" });
  };

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p>{t.message}</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>

      <div id="add-testimonial">
        <h2>Leave a Testimonial</h2>
        <form id="testimonial-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

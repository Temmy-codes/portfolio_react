const testimonials = [
  {
    text: 'As someone new to yoga, I was nervous at first, but your videos made everything feel so simple. I love how you explained each pose step by step.',
    author: 'Priscy',
  },
  {
    text: "I love that I can practise on my own schedule. Your instructions are so clear, and I felt completely at ease. Thank you Temmy!",
    author: 'Juliana',
  },
  {
    text: "After just one session, I felt a difference. My body was so stiff before — now I'm seeing real change. Your pre-recorded sessions are perfect for a busy lifestyle.",
    author: 'Emmanuella',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-label yoga-label" style={{ textAlign: 'center' }}>What students say</div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Testimonials.</h2>
      <div className="testimonials-grid">
        {testimonials.map(t => (
          <div className="testimonial-card" key={t.author}>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">— {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
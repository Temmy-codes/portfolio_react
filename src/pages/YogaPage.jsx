const yogaCards = [
  { icon: '🧘‍♀️', title: '1-on-1 Private Sessions', desc: 'Personalised sessions tailored to your body, goals, and schedule.' },
  { icon: '📱', title: 'Online Group Classes', desc: 'Join a growing community of students improving flexibility and strength from home.' },
  { icon: '🎥', title: 'Pre-recorded Programs', desc: 'Practise on your own schedule. Pause, rewind, revisit — designed for busy lives.' },
  { icon: '🌿', title: 'Flexibility & Strength', desc: 'Hip flexibility, lower back pain relief, splits training, and mindful movement.' },
];

const testimonials = [
  { text: 'As someone new to yoga, I was nervous at first, but your videos made everything feel so simple.', author: 'Priscy' },
  { text: "I love that I can practise on my own schedule. Your instructions are so clear, and I felt completely at ease.", author: 'Juliana' },
  { text: "After just one session, I felt a difference. Your pre-recorded sessions are perfect for a busy lifestyle.", author: 'Emmanuella' },
];

function YogaPage() {
  return (
    <>
      <section className="yoga-section" id="yoga">
        <div className="section-label yoga-label">Yoga with Temmy</div>
        <h2 className="section-title">Move better.<br />Feel stronger.<br />Start today.</h2>
        <p className="section-desc">
          Online yoga classes designed for beginners and beyond, to improve flexibility, strength and mindfulness.
          Flexible scheduling, real results — from wherever you are in the world.
        </p>
        <div className="tiktok-stats">
          <div className="tiktok-stat"><div className="tiktok-num">5M+</div><div className="tiktok-label">Total Views</div></div>
          <div className="tiktok-stat"><div className="tiktok-num">18K+</div><div className="tiktok-label">TikTok Followers</div></div>
          <div className="tiktok-stat"><div className="tiktok-num">857K+</div><div className="tiktok-label">Top Video Views</div></div>
        </div>
        <div className="yoga-grid">
          {yogaCards.map(c => (
            <div className="yoga-card" key={c.title}>
              <div className="yoga-icon">{c.icon}</div>
              <div className="yoga-card-title">{c.title}</div>
              <p className="yoga-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
        <a href="mailto:essomary49@gmail.com" className="btn btn-yoga">Book a Class →</a>
      </section>
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
    </>
  );
}

export default YogaPage;
function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero">
        <div className="hero-tag">Available for hire · Lagos, Nigeria · Remote</div>
        <h1>Frontend Developer.<br /><em>Yoga Instructor.</em><br />Social Media Manager. </h1>
        <p className="hero-sub">
          Frontend Developer, building responsive websites and web applications. Yoga Instructor,
          helping individuals in improving flexibility, strength and mindfulness. Social Media Manager, 
          helping brands grow their online presence through strategic planning and execution.
          Three passions, one person.
        </p>
     <div className="hero-cta">
  <a href="#dev" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('dev'); }}>
    Hire Me — Dev
  </a>
  <a href="#content" className="btn btn-content" onClick={e => { e.preventDefault(); scrollTo('content'); }}>
    Hire Me — SMM
  </a>
  <a href="#yoga" className="btn btn-outline" onClick={e => { e.preventDefault(); scrollTo('yoga'); }}>
    Book a Yoga Class
  </a>
</div>
        <div className="hero-stats">
          <div><div className="stat-num">5M+</div><div className="stat-label">TikTok Views</div></div>
          <div><div className="stat-num">5+</div><div className="stat-label">Live Projects</div></div>
          <div><div className="stat-num">2</div><div className="stat-label">Years Coding</div></div>
          <div><div className="stat-num">4+</div><div className="stat-label">Years Teaching</div></div>
        </div>
      </section>
      <div className="section-divider">
        <span>— Scroll to explore different worlds —</span>
      </div>
    </>
  );
}

export default Home;
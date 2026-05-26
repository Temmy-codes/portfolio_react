const projects = [
  {
    num: '01 / Featured',
    name: 'ClinicEase',
    desc: 'Full-stack clinic appointment booking system. Patients browse doctors, book time slots, get instant confirmation. Admin dashboard included.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    link: 'https://clinic-app-booking.netlify.app/',
  },
  {
    num: '02',
    name: 'Stayverse — SEO Engineer',
    desc: 'Improved SEO structure and metadata across the Stayverse hospitality platform, boosting search visibility ahead of product launch.',
    tags: ['Next.js', 'SEO', 'TypeScript'],
    link: 'https://www.stayversepro.com/',
  },
  {
    num: '03',
    name: 'TEMMY Yoga E-Commerce',
    desc: 'Dynamic shopping cart with real-time total calculation, Selar product integration, and responsive checkout UI.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://temz-yogastore.netlify.app/',
  },
  {
    num: '04',
    name: 'Frontend Auth App',
    desc: 'Complete authentication UI with sign-up, sign-in, password reset, and dark/light mode toggle.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://front-end-authentication.netlify.app/',
  },
  {
    num: '05',
    name: 'User Profile Directory',
    desc: 'Dynamic React app fetching and displaying user profiles from external APIs with search, filtering, and error handling.',
    tags: ['React', 'REST API', 'JavaScript'],
    link: 'https://user-profile-directory.netlify.app/',
  },
];

function Portfolio() {
  return (
    <>
      <section className="portfolio-section" id="dev">
        <div className="section-label">01 — Frontend Development</div>
        <h2 className="section-title">I turn designs into<br />fast, fuctional web applications.</h2>
        <p className="section-desc">
          Specialising in React and Next.js, I build responsive, performant web applications,
          from landing pages to full-stack booking systems.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                View Live →
              </a>
            </div>
          ))}
        </div>
        <a href="mailto:essomary49@gmail.com" className="btn btn-primary">
          Hire Me for a Project →
        </a>
      </section>
      <div className="section-divider"><span>— and off the screen —</span></div>
    </>
  );
}

export default Portfolio;
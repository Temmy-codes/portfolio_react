const viralVideos = [
  { title: 'How to Improve Hip Flexibility', views: '812K+ views. 16K Likes' },
  { title: 'How to Do a Split for Complete Beginners', views: '638K+ views · 37K likes' },
  { title: 'Kegel Yoga Routine', views: '465K+ views. 21k Likes' },
  { title: 'Kegel Yoga (Beginner Focus)', views: '273K+ views · 39K likes' },
  { title: '2 Yoga Poses for Lower Back Pain', views: '214K+ views. 11k Likes' },
  { title: 'Yoga Poses for Back Flexibility', views: '412K+ views. 41k Likes' },
  { title: 'Yoga Poses to Improve Posture and Flexibility', views: '142K+ views. 13k Likes' },
];

const yogaCards = [
  { icon: '🧘‍♀️', title: '1-on-1 Private Sessions', desc: 'Personalised sessions tailored to your body, goals, and schedule.' },
  { icon: '📱', title: 'Online Group Classes', desc: 'Join a growing community of students improving flexibility and strength from home.' },
  { icon: '🎥', title: 'Pre-recorded Programs', desc: 'Practise on your own schedule. Pause, rewind, revisit — designed for busy lives.' },
  { icon: '🌿', title: 'Flexibility & Strength', desc: 'Hip flexibility, lower back pain relief, splits training, and mindful movement.' },
];

function Services() {
  return (
    <>
      {/* CONTENT SECTION */}
      <section className="content-section" id="content">
        <div className="section-label content-label">02 — Content Creation & Social Media</div>
        <h2 className="section-title">I grow brands.<br />I create content<br />that <em style={{ fontStyle: 'italic', color: 'var(--accent-content)' }}>performs.</em></h2>
        <p className="section-desc">
          From strategy to execution — I manage social media, produce UGC, and create
          short-form video content that drives real engagement and growth.
        </p>

        <div className="content-exp-grid">
          <div className="content-exp-card">
            <div className="exp-role">Social Media Manager</div>
            <div className="exp-company">Afriment · Jan 2026 – Mar 2026</div>
            <ul className="exp-points">
              <li>Created UGC and short-form video content for digital products</li>
              <li>Planned and scheduled content across multiple platforms</li>
              <li>Monitored analytics and optimised content performance</li>
              <li>Collaborated with teams to manage Afriment's social media presence</li>
            </ul>
          </div>
          <div className="content-exp-card">
            <div className="exp-role">UGC Content Creator</div>
            <div className="exp-company">Stayverse · Jan 2026 – Feb 2026</div>
            <ul className="exp-points">
              <li>Created user-generated content to promote product features</li>
              <li>Produced engaging videos to increase product visibility</li>
              <li>Supported brand storytelling through short-form content</li>
            </ul>
          </div>
          <div className="content-exp-card">
            <div className="exp-role">Content Creator</div>
            <div className="exp-company">Self-Employed · 2023 – Present</div>
            <ul className="exp-points">
              <li>Built TikTok audience of 15K+ followers and 4.5M+ views</li>
              <li>Plan, script, film, and edit short-form videos consistently</li>
              <li>Engage audience and optimise content based on performance insights</li>
              <li>Instagram: 2.1K+ followers · YouTube: 400+ subscribers</li>
            </ul>
          </div>
        </div>

        <div className="viral-videos">
          <div className="viral-label"> Top Performing Videos</div>
          <div className="viral-grid">
            {viralVideos.map(v => (
              <div className="viral-row" key={v.title}>
                <span className="viral-title">{v.title}</span>
                <span className="viral-views">{v.views}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="platform-row">
          {['TikTok — 15K+ followers', 'Instagram — 2.1K+ followers', 'YouTube — 400+ subscribers',
            'Video Editing — CapCut & Canva', 'UGC Creation', 'Content Strategy', 'Analytics & Growth'].map(p => (
            <span className="platform-pill" key={p}>{p}</span>
          ))}
        </div>

        <a href="mailto:essomary49@gmail.com" className="btn btn-content">Work With Me →</a>
      </section>

      <div className="section-divider"><span>— and on the mat —</span></div>

      {/* YOGA SECTION */}
      <section className="yoga-section" id="yoga">
        <div className="section-label yoga-label">03 — Yoga with Temmy</div>
        <h2 className="section-title">Move better.<br />Feel stronger.<br />Start today.</h2>
        <p className="section-desc">
          Online yoga classes designed for beginners and beyond, to improve flexibility, strength and mindfulness.
          Flexible scheduling, real results — from wherever you are in the world.
        </p>
        <div className="tiktok-stats">
          <div className="tiktok-stat"><div className="tiktok-num">4.5M+</div><div className="tiktok-label">Total Views</div></div>
          <div className="tiktok-stat"><div className="tiktok-num">15K+</div><div className="tiktok-label">TikTok Followers</div></div>
          <div className="tiktok-stat"><div className="tiktok-num">825K+</div><div className="tiktok-label">Top Video Views</div></div>
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

      <div className="section-divider"><span></span></div>
    </>
  );
}

export default Services;
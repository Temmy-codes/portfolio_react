const skillGroups = [
  {
    label: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    label: 'Tools & APIs',
    skills: ['REST APIs', 'Fetch & Axios', 'Git & GitHub', 'Supabase', 'SEO', 'Deployment'],
  },
  {
    label: 'Content & Social',
    skills: ['TikTok', 'Instagram', 'YouTube', 'CapCut', 'Canva', 'UGC Creation', 'Content Strategy', 'Analytics'],
  },
  {
    label: 'Professional',
    skills: ['Agile / Sprints', 'Code Reviews', 'Remote Collaboration', 'Problem Solving', 'Communication'],
  },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="section-label">Skills</div>
      <h2 className="section-title">My Skills.</h2>
      <div className="skills-groups">
        {skillGroups.map(g => (
          <div key={g.label}>
            <div className="skills-group-title">{g.label}</div>
            <div className="skills-row">
              {g.skills.map(s => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
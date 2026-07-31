import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-top">
          <img
            src="https://media.journoportfolio.com/users/427887/images/97be6e1c-a656-4b3e-9ef2-d7c97692beb7_max-600.jpg"
            alt="Mary Esso"
            className="about-img"
          />
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">God's Own ❤️</h2>
            <p className="about-text">
              My name is Mary Esso. I'm a passionate professional with a unique blend of expertise in
              <span className="about-highlight"> health, wellness, technology, and content creation.</span>
            </p>
          </div>
        </div>

        <p className="about-text">
          With a BSc in <span className="about-highlight">Medical Biochemistry</span> and over
          two years of experience as a Laboratory Scientist, I bring analytical and scientific rigour to all my work.
        </p>
        <p className="about-text">
          As a <span className="about-highlight">Frontend Developer</span>, I build responsive, user-focused
          websites — translating UI/UX designs into clean functional code using React and Next.js,
          integrating APIs, and delivering quality products in agile environments.
        </p>
        <p className="about-text">
          As a <span className="about-highlight">Content Creator & Social Media Strategist</span>, I've grown
          an engaged online community of 18K+ TikTok followers and 5M+ views, producing and editing
          short-form and long-form videos that help brands and individuals grow authentically.
        </p>
        <p className="about-text">
          As a <span className="about-highlight">Yoga Instructor</span>, I guide individuals in improving
          flexibility, strength, and mindfulness, creating a balanced space where students explore the
          connection between body and mind through breath and movement.
        </p>
        <p className="about-text">
          Beyond that, I am also a skilled <span className="about-highlight">video editor and content creator</span>,
          producing engaging reels, shorts, and videos in both short-form and long-form formats.
        </p>
        <p className="about-text">So yeah, that's a brief summary about me 😊</p>
      </div>
    </section>
  );
}

export default About;
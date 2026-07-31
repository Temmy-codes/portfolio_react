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
              My name is Mary Esso. 
            </p>
          </div>
        </div>

        <p className="about-text">
          I hold a BSc in <span className="about-highlight">Medical Biochemistry</span> and 
          worked as a Laboratory Scientist during my NYSC. Provided accurate diagnostic results, 
          supporting timely healthcare decisions and ensuring quality in laboratory processes.
        </p>
        <p className="about-text">
          As a <span className="about-highlight">Frontend Developer</span>,I have developed multiple web 
          applications , portfolios, and landing pages, creating user-focused experiences that are both functional 
          and accessible, translating UI/UX designs into clean functional code using React and Next.js,integrating 
          APIs, and delivering quality products in agile environments.
        </p>
        <p className="about-text">
          As a <span className="about-highlight">Content Creator & Social Media Strategist</span>, 
          I grow brands through short-form  and long-form video, content strategy, and community building, 
          running my own brand, “Yoga with Temmy,” to 18K+ followers on TikTok while managing content calendars 
          and campaigns for others-form videos that help brands and individuals grow authentically.
        </p>
        <p className="about-text">
          As a <span className="about-highlight">Yoga Instructor</span>, I guide individuals in improving
          flexibility, strength, and mindfulness, creating a balanced space where students explore the
          connection between body and mind through breath and movement.
        </p>
      
        <p className="about-text">So yeah, that's a brief summary about me 😊</p>
      </div>
    </section>
  );
}

export default About;
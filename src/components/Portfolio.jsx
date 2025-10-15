import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Projects and Experiences</h2>
      <div className="portfolio-cards">
        <div className="card">
          <a href="https://app.netlify.com/projects/maryesso/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OIP.lXZAzz2UVBpOEqQkN-T3GAHaD4?w=320&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Project 1"/>
            <h3>Next.Js Portfolio Website</h3>
            <p>A modern and responsive portfolio website built with Next.js, designed to showcase professional projects, skills, and personal branding. Optimized for fast loading, mobile-friendly design, and SEO.</p>
          </a>
        </div>

        <div className="card">
          <a href="https://github.com/Temmy-codes/Portfolio-Website/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OIP.pAGmGWwNTbEjAvFoTtXUAAHaE8?w=262&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Project 2"/>
            <h3>Personal Portfolio (HTML / CSS / JS)</h3>
            <p>Responsive and interactive site to highlight projects, skills, and personal branding with a clean, user-friendly interface.</p>
          </a>
        </div>

        <div className="card">
          <a href="https://app.netlify.com/projects/temmyyogaclass/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OSK.HEROYmvwKsKVGQVwv_DDW_QEi9acLIb4iSpBACZUogzMg0Y?w=384&h=228&c=1&rs=2&o=6&cb=thwsc4&pid=SANGAM" alt="Project 3"/>
            <h3>Yoga Class Registration Website</h3>
            <p>Register students for yoga classes with a clean registration form and schedule.</p>
          </a>
        </div>

        <div className="card">
          <a href="https://app.netlify.com/projects/user-profile-directory/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OIP.bYhu77NcI-0LtdJaKk2o4QHaE8?w=245&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Project 6"/>
            <h3>User Profile Directory</h3>
            <p>React app that displays user profiles dynamically with search and filtering.</p>
          </a>
        </div>

         <div className="card">
          <a href="https://temi-spotify-clone.netlify.app/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OIP.bHBe5cPKqC_MkAo1UFuQ8gHaEK?w=282&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3" alt="Project 6"/>
            <h3></h3>
            <p>Recreated Spotify landing page using React and CSS. Focused on
              layout structure, animations, and responsiveness for a polished result..</p>
          </a>
        </div>

        <div className="card flexibility-card">
          <img src="https://media.journoportfolio.com/users/427887/images/d8457a21-9e2f-43e9-8ea6-b33a205df853_max-600.jpeg" alt="Flexibility"/>
          <h3>Flexibility Training Program</h3>
          <p>Structured program with progressive exercises to enhance mobility.</p>
          </div>

        <div className="card">
          <img src="https://media.journoportfolio.com/users/427887/images/04f10bf2-ebfd-46f4-a945-8c8c272fa8d5_max-600.jpeg" alt="Yoga"/>
          <h3>Yoga Instruction & Wellness</h3>
          <p>Guided yoga sessions focused on flexibility, mindfulness, and overall wellness.</p>
        </div>

        <div className="card">
         <img src="https://media.journoportfolio.com/users/427887/images/69e26a20-1aea-4b32-9828-e03ce1995789_max-600.jpeg" alt="Lab"/>
          <h3>Laboratory Science</h3>
          <p>Experience in collection of samples, analyzing blood, tissue, and other samples using sophisticated equipments to detect abnormaliities and ensure accurate results.</p> 
        </div>
      </div>

      <a className="view-more" href="https://github.com/Temmy-codes" target="_blank" rel="noreferrer">View More</a>
    </div>
  );
}

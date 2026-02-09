import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Projects and Experiences</h2>
      <div className="portfolio-cards">
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.lXZAzz2UVBpOEqQkN-T3GAHaD4?w=320&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Project 1"/>
            <h3>Next.Js Portfolio Website</h3>
            <p>A modern and responsive portfolio website built with Next.js, designed to showcase professional projects, skills, and personal branding. Optimized for fast loading, mobile-friendly design, and SEO.</p>
          
          <ul className="projects-bullets">
          <li>Built the portfolio using Next.js for improved performance and SEO</li>
          <li>Implemented dynamic routing and reusable layout components</li>
          <li>Optimized images and assets for faster load times</li>
          <li>Designed a fully responsive layout for all screen sizes</li>
          </ul>
         
        </div>

        <div className="card">
          <a href="https://temmyyogaclass.netlify.app/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OSK.HEROYmvwKsKVGQVwv_DDW_QEi9acLIb4iSpBACZUogzMg0Y?w=384&h=228&c=1&rs=2&o=6&cb=thwsc4&pid=SANGAM" alt="Project 3"/>
            <h3>Yoga Class Registration Platform</h3>
            <p>A full registration system for managing yoga class signups and student data.</p>
          </a>
          <ul className="project-bullets">
         <li>Built a registration form to collect student details</li>
         <li>Implemented client-side form validation</li>
         <li>Structured data for easy class and student management</li>
         <li>Optimized user flow for smooth onboarding</li>
        </ul>
        </div>

         <div className="card">
          <a href="https://www.stayversepro.com/" target="_blank" rel="noreferrer">
            <img src="https://www.stayversepro.com/_next/image?url=%2Flogo-white.png&w=256&q=75" alt="Project 3"/>
            <h3>Software Engineer Intern - STAYVERSE through Afriment Internship Program</h3>
            <p>Contributed to the Stayverse web application by improving SEO structure and optimizing key pages for better search visibility and user discovery.</p>
          </a>
          <ul className="project-bullets">
         <li>Improved website SEO by adding relevant keywords and metadata across core sections of the application.</li>
         <li>Optimized content in Herosection.tsx, WhyChooseUs.tsx, and the All-in-One Travel & Hospitality Companion.</li>
         <li>Updated layout.tsx to support consistent SEO structure across pages.</li>
        </ul>
        </div>

        <div className="card">
          <a href="https://temz-yogastore.netlify.app/" target="_blank" rel="noreferrer">
          <img src= "https://th.bing.com/th/id/OIP.dkBwn9M9TF3NfDWN-5vyswHaJQ?w=184&h=230&c=7&r=0&o=7&pid=1.7&rm=3"></img>
          <h3>E-COMMERCE website with Cart Functionality </h3>
          <p>TEMMY yoga store, an e-commerce interface built to showcase yoga products and manage shopping cart interactions.</p>
          </a>
          
          <ul className="project-bullets">        
          <li>Implemented add-to-cart and remove-from-cart functionality</li>
          <li>Managed cart state and item quantity updates</li>
          <li>Calculated cart totals dynamically</li>
          <li>Designed product cards and shopping flow UI</li>
          <li>Integrated Selar product links into frontend interface</li>
          <li>Designed product listing pages for digital products</li>
          <li>Built call-to-action flows for product purchases</li>
          </ul>
        </div>
        
        <div className="card">
          <img src="https://media.journoportfolio.com/users/427887/images/04f10bf2-ebfd-46f4-a945-8c8c272fa8d5_max-600.jpeg" alt="Yoga"/>
          <h3>Yoga Instruction & Wellness Program</h3>
          <p>Guided yoga sessions focused on flexibility, mindfulness, and overall wellness.</p>

          <ul className="project-bullets">
          <li>Designed guided yoga programs for flexibility and strength</li>
          <li>Led group and one-on-one wellness sessions</li>
          <li>Incorporated breathwork and mindfulness techniques</li>
          <li>Adapted sessions for beginner to advanced levels</li>
          <li>Focused on injury prevention and safe alignment</li>
          </ul>
        </div>

        <div className="card">
         <img src="https://media.journoportfolio.com/users/427887/images/69e26a20-1aea-4b32-9828-e03ce1995789_max-600.jpeg" alt="Lab"/>
          <h3>Laboratory Science & Diagnostics</h3>
          <p>Experience in collection of samples, analyzing blood, tissue, and other samples using sophisticated equipments to detect abnormaliities and ensure accurate results.</p> 
        
        <ul className="project-bullets">
       <li>Performed routine diagnostic laboratory tests</li>
       <li>Analyzed blood and other laboratory samples for accurate results</li>
       <li>Maintained laboratory equipment under quality control standards</li>
       <li>Documented and reported findings for clinical decision-making</li>
       </ul>
       </div>


         <div className="card">
          <a href="" target="_blank" rel="noreferrer">
            <img src="https://www.afriment.com/_next/image?url=%2Fafriment-logo.jpg&w=1920&q=75" alt="Project 4"/>
            <h3>Content Creator - AFRIMENT</h3>
            <p>Created weekly content for Afriment's AI Automation and Workflow Programme.</p>
          </a>
          <ul className="project-bullets">
         <li>Created weekly content on Afriment's AI Automation and Workflow Programme.</li>
         <li>Worked with provided script to deliver educational AI- focused content.
         <li>Communicated AI automation concepts clearly for a general audience.</li>
         </li>
        </ul>
        </div>

        <div className="card">
          <a href="https://user-profile-directory.netlify.app/" target="_blank" rel="noreferrer">
            <img src="https://th.bing.com/th/id/OIP.bYhu77NcI-0LtdJaKk2o4QHaE8?w=245&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Project 6"/>
            <h3>User Profile Directory App</h3>
            <p> A dynamic React application for displaying and managing user profile data from external APIs. </p>
        
        <ul className="project-bullets">
        <li>Fetched and displayed user profile data from external APIs</li>
        <li>Built reusable profile card components for scalability</li>
        <li>Implemented search and filtering for improved data exploration</li>
        <li>Handled loading and error states for better user experience</li>
        <li>Designed responsive UI for mobile and desktop users</li>
        </ul>
          </a>
        </div>
       </div>

      <div className="card">
        <a href="https://front-end-authentication.netlify.app/" target="_blank" rel="noreferrer">
        <img src="https://th.bing.com/th?q=Authentication+App+with+Black+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"/>
          <h3>Frontend Authentication </h3>
          <p>A frontend authentication app built with react that allows users to sign in or create an account, using their email and password.</p>
          It includes a forget password option, a dark/light mode toggle for better user experience.
        </a>
          
        </div>


      <a className="view-more" href="https://github.com/Temmy-codes" target="_blank" rel="noreferrer">View More</a>
    </div>
  );
}

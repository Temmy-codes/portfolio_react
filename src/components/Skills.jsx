import React from "react";

export default function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React & Next.js</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Editing & Content Tools</h3>
          <ul>
            <li>Video Editing</li>
            <li>Content Strategy & Planning</li>
            <li>Social Media Optimization</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Laboratory</h3>
          <ul>
            <li>Diagnostic Testing</li>
            <li>Handling Laboratory Equipment</li>
            <li>Phlebotomy (blood sample collection)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Professional Skills (McKinsey Forward Program)</h3>
          <ul>
            <li>Effective Communication</li>
            <li>Problem-Solving & Critical Thinking</li>
            <li>Resilience & Adaptability</li>
            <li>Collaboration & Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

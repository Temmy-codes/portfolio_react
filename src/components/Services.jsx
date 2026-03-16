import React from "react";

export default function Services() {
  return (
    <div className="services-section">
      <h2>My Services</h2>
      <div className="services">
        <div className="service-card">
          <h3>Web Development</h3>
          <ul>
            <li>Frontend Development</li>
            <li>UI/UX Design Implementation</li>
            <li>Landing pages and Portfolio Sites</li>
            <li>Performance optimization (speed, SEO, accessibility)</li>
            <li>API integration with React & Next.js</li>
            <li>Website Maintenance & Updates</li>
            <li>Deployment</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Yoga Classes</h3>
          <ul>
            <li>Group Yoga Sessions</li>
            <li>Private / One-on-One Sessions</li>
            <li>Yoga for Beginners</li>
            <li>Advanced Yoga Flow</li>
            <li>Wellness routines for flexibility & strength</li>
            <li>Mindfulness and guided relaxation</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Social Media Strategist / Content Creation</h3>
          <ul>
            <li>Social Media Influencer Services</li>
            <li>Brand Collaboration & UGC Creation</li>
            <li>Short and Long Format Video Creation</li>
            <li>Social Media Management</li>
            <li>Professional Video Editing</li>
            <li>Content Strategy and Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Services() {
  return (
    <div className="services-section">
      <h2>My Services</h2>
      <div className="services">
        <div className="service-card">
          <h3>Web Development</h3>
          <ul>
            <li>Responsive website design and development</li>
            <li>Custom landing pages and portfolios</li>
            <li>Performance optimization (speed, SEO, accessibility)</li>
            <li>API integration with React & Next.js</li>
            <li>Deployment</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Yoga Classes</h3>
          <ul>
            <li>Private and group yoga sessions</li>
            <li>Virtual classes for all levels</li>
            <li>Wellness routines for flexibility & strength</li>
            <li>Mindfulness and guided relaxation</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Content Creation</h3>
          <ul>
            <li>Engaging social media content (shorts, reels)</li>
            <li>Professional video editing</li>
            <li>Content strategy and scripting</li>
            <li>Yoga, self-love, wellness, and tech-focused content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

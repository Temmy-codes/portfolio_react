// Certifications.jsx
import React from "react";

const certifications = [
  {
    title: "Frontend Development",
    issuer: "Axia Africa",
    year: 2025
  },
  {
    title: "Website Development",
    issuer: "Simplilearn SkillUp",
    year: 2024
  },
  {
    title: "Content Manager",
    issuer: "Simplilearn SkillUp",
    year: 2024
  },
  {
    title: "Digital Marketing",
    issuer: "Simplilearn SkillUp",
    year: 2024
  },
  {
    title: "Software Engineer",
    issuer: "Afriment",
    year: 2025
  }
];

export default function Certifications() {
  return (
    <div>
      <h2>My Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            <strong>{cert.title}</strong> — {cert.issuer} ({cert.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

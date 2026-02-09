import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
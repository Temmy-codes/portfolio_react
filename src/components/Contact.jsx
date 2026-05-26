const socialLinks = [
  { label: 'maryesso.com.ng', href: 'https://maryesso.com.ng' },
  { label: 'essomary49@gmail.com', href: 'mailto:essomary49@gmail.com' },
  { label: 'TikTok @temmy.___', href: 'https://tiktok.com/@temmy.___' },
  { label: 'Instagram @temmy.___', href: 'https://instagram.com/temmy.___' },
  { label: 'YouTube @maryesso_', href: 'https://youtube.com/@maryesso_' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/maryesso' },
  { label: 'GitHub', href: 'https://github.com/Temmy-codes' },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Let's work<br /><em>together.</em></h2>
      <p>Whether you need a website built or want to start your yoga journey — I'd love to hear from you.</p>
      <div className="contact-cta">
        <a href="mailto:essomary49@gmail.com" className="btn btn-primary">Send Me an Email</a>
      </div>
      <div className="contact-links">
      </div>
    </section>
  );
}

export default Contact;
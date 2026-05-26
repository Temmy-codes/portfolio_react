import {
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Mary Esso. All rights reserved.</p>

      <div className="social-icons">
        <a
          href="https://instagram.com/temmy.___"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://tiktok.com/@temmy.___"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok />
        </a>

        <a
          href="https://github.com/Temmy-codes"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/maryesso"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://youtube.com/@maryesso_"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
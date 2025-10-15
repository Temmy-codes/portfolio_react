
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://instagram.com/temmy.___" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/maryesso" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://tiktok.com/@temmy.___" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>
        <a href="https://youtube.com/@maryesso_" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://github.com/Temmy-codes" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mary Esso. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        MuhanadTech
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="" target="_blank">
          <FaFacebookF />
        </a>
        <a href="" target="_blank">
          <FaInstagram />
        </a>
        <a href="" target="_blank">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; <a href="#">MuhanadTech</a> All Rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;

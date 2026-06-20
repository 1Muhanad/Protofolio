import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ImageMe from "../../assets/me-about.png";
import "./about.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="ImageMe" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6 Months</small>
            </div>

            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>5+ worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Complete</small>
            </div>
          </div>

          <p>
            I'm a Frontend Developer focused on React.js and Next.js. I enjoy
            building clean, fast, and responsive web apps. I started learning
            development on my own and I've been working on real projects to
            improve my skills every day. I'm looking for opportunities where I
            can grow and contribute to a real product.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

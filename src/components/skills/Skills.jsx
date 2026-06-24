import { default as Css } from "../../assets/css3.svg";
import Xpressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import "./skills.css";

const SkillsData = [
  {
    id: 1,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 1,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 1,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 1,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "User Interface",
  },
  {
    id: 1,
    image: Nodejs,
    title: "NodeJS",
    disc: "Web Server",
  },
  {
    id: 1,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  {
    id: 1,
    image: Xpressjs,
    title: "ExpressJS",
    disc: "Node Framework",
  },
  {
    id: 1,
    image: Mongodb,
    title: "MongoDB",
    disc: "Database",
  },
];
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container container_skills col-sm-2">
        {SkillsData.map(({ id, title, image, disc }) => (
          <article className="card_skills">
            <div className="icon" key={id}>
              <img src={image} alt="" />
            </div>

            <div className="content">
              <h4>{title}</h4>
              <p className="text-title">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

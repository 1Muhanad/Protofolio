import "./projects.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce",
    github: "https://github.com/1Muhanad/Ecommerce",
    demo: "https://ecommerce-ruddy-xi-34.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Gemini Clone",
    github: "https://github.com/1Muhanad/gemini-clone",
    demo: "https://gemini-clone-nine-plum-37.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Youtube Clone",
    github: "https://github.com/1Muhanad/Youtube_Clone",
    demo: "https://youtube-clone-psi-ruby.vercel.app/",
  },
];
function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portofolio</h2>
      </div>

      <div className="container projects-container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article className="portofolio_item ">
            <div className="portofolio_item_img" key={id}>
              <img src={image} alt="" />
            </div>

            <h3>{title}</h3>

            <div className="portofolio_item_btns">
              <a href={github} target="_blank" className="btn">
                Github
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

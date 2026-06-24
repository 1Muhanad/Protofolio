import { FaCode } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import "./services.css";
function Services() {
  return (
    <section className="services" id="services">
      <div className="top_section">
        <h5>What i offer</h5>
        <h2>Service</h2>
      </div>

      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p className="text-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi!
          </p>
        </article>
        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p className="text-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi!
          </p>
        </article>
        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className="text-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi!
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;

import emailjs from "@emailjs/browser";

import { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "muhanadelaidy@gmail.com",
    link: "mailto:test@gmail.com",
  },
  {
    id: 2,
    icon: <LiaLinkedin />,
    title: "Linked In",
    info: "Muhanad Elaidy",
    link: "https://www.linkedin.com/in/muhanadelaidy/",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+201017206829",
    link: "https://api.whatsapp.com/send?phone=201017206829",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l995su8",
      "template_jukcx39",
      form.current,
      "e3FiwgK4a5CSBjMZ2",
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Toucth</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea
            rows={10}
            name=""
            id=""
            placeholder="Enter Your Message"
            name="message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import { useState } from "react";
import "./nav.css";

import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="">
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <LuUserRound />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        onClick={() => setActiveNav("#projects")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;

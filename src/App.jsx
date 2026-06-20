import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/foooter/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav.jsx";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

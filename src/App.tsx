import About from "./layouts/About";
import Contact from "./layouts/Contact";
import NavBar from "./layouts/NavBar";
import Projects from "./layouts/Projects";
import Timeline from "./layouts/Timeline";

export default function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      {/*
      <Skills />
      <Education />
      <Experience />
      <Blog />
      <Contact /> */}
    </>
  );
}

import { useEffect, useState } from "react";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import NavBar from "./layouts/NavBar";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import Timeline from "./layouts/Timeline";

export default function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </>
  );
}

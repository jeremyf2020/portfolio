import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleScroll = (): void => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    let currentSection = "";

    if (window.scrollY > 1800) {
      setActiveSection("contact");
      return;
    }

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 84) {
        currentSection = section.getAttribute("id") || "";
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 w-full mx-auto z-10">
      <div className="py-6 flex justify-between bg-slate-900">
        <div
          className="hidden sm:flex items-center bg-gradient-to-br from-sky-700 to-cyan-100 
            bg-clip-text text-xl font-bold text-transparent"
        >
          <div>Jeremy's Portfolio</div>
        </div>
        <ul className="flex gap-x-3 font-medium text-gray-200">
          <li
            className={`hover:text-amber-200 cursor-pointer ${
              activeSection === "about" ? "text-amber-200" : ""
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`hover:text-amber-200 cursor-pointer ${
              activeSection === "projects" ? "text-amber-200" : ""
            }`}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`hover:text-amber-200 cursor-pointer ${
              activeSection === "skills" ? "text-amber-200" : ""
            }`}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`hover:text-amber-200 cursor-pointer ${
              activeSection === "timeline" ? "text-amber-200" : ""
            }`}
          >
            <a href="#timeline">My Path</a>
          </li>
          <li
            className={`hover:text-amber-200 cursor-pointer ${
              activeSection === "contact" ? "text-amber-200" : ""
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

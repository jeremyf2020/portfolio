import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const navHeight = document.getElementById("nav")?.offsetHeight || 0;

  const handleScroll = (): void => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - navHeight) {
        currentSection = section.getAttribute("id") || "";
      }
    });
    setActiveSection(currentSection);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="nav" className="sticky top-0 w-full mx-auto z-10">
      <div className="py-6 flex justify-between bg-slate-900">
        <div
          className="hidden sm:flex items-center bg-gradient-to-br from-sky-700 to-cyan-100 
            bg-clip-text text-xl font-bold text-transparent"
        >
          <div>Jeremy's Portfolio</div>
        </div>
        <ul className="flex gap-x-3 font-medium text-gray-200">
          <li
            onClick={() => scrollToSection("about")}
            className={`hover:text-amber-200 hover:underline cursor-pointer ${
              activeSection === "about" ? "text-amber-200" : ""
            }`}
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className={`hover:text-amber-200 hover:underline cursor-pointer ${
              activeSection === "projects" ? "text-amber-200" : ""
            }`}
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className={`hover:text-amber-200 hover:underline cursor-pointer ${
              activeSection === "skills" ? "text-amber-200" : ""
            }`}
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("timeline")}
            className={`hover:text-amber-200 hover:underline cursor-pointer ${
              activeSection === "timeline" ? "text-amber-200" : ""
            }`}
          >
            My Path
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className={`hover:text-amber-200 hover:underline cursor-pointer ${
              activeSection === "contact" ? "text-amber-200" : ""
            }`}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

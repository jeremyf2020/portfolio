import React from "react";
import tetrisLogo from "../assets/tetris.png";
import todoLogo from "../assets/toDoList.png";

interface ProjectProps {
  name: string;
  logo: string;
  tech: string[];
  description: string;
}

const techColors: { [key: string]: string } = {
  React: "bg-sky-400 text-sky-900",
  JavaScript: "bg-yellow-400 text-yellow-900",
  HTML: "bg-orange-400 text-orange-900",
  CSS: "bg-blue-400 text-blue-900",
  TypeScript: "bg-blue-500 text-blue-100",
};

const createProject = ({ name, logo, tech, description }: ProjectProps) => (
  <div>
    <div className="h-36 flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row mb-6">
      <img
        className="h-auto w-36 hover:translate-y-1"
        src={logo}
        alt={`${name} logo`}
      />
      <div>
        <div className="flex gap-2 items-center">
          <span className="text-xl font-semibold">{name}</span>
          {tech.map((technology) => (
            <span
              key={technology}
              className={`rounded-md px-2 py-1 text-xs ${
                techColors[technology] || "bg-gray-400 text-gray-900"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="text-gray-400">{description}</div>
      </div>
    </div>
  </div>
);

const Project: React.FC = () => {
  return (
    <div>
      <div className="mb-6 text-2xl font-bold">
        Recent{" "}
        <span className="bg-gradient-to-br from-sky-700 to-cyan-100 bg-clip-text text-transparent">
          Projects
        </span>
      </div>
      <div>
        {createProject({
          name: "Tetris",
          logo: tetrisLogo,
          tech: ["JavaScript", "HTML", "CSS"],
          description:
            "Using Javascript to build a traditional Tetris game, showcasing JavaScript skills.",
        })}
        {createProject({
          name: "To Do List",
          logo: todoLogo,
          tech: ["React", "TypeScript", "HTML", "CSS"],
          description:
            "Using JavaScript and React to build a To Do List App, showcasing Front-end and Back-end skills.",
        })}
      </div>
    </div>
  );
};

export default Project;

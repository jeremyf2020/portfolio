import React from "react";
import tetrisLogo from "../assets/tetris.png";
import todoLogo from "../assets/toDoList.png";
import { handleMouseMove } from "../functions/handMouseMove";

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="mb-6 text-2xl font-bold bg-gradient-to-br from-sky-700 to-cyan-100 bg-clip-text text-transparent mt-5">
        Recent Projects
      </h1>

      <div className="z-4 relative mb-4">
        <div
          onMouseMove={handleMouseMove}
          className="
            bg-white/[0.03] rounded-lg  h-60 md:h-52 w-80 cursor-pointer 
              
        after:h-full after:w-full after:left-0 after:opacity-0 after:absolute after:top-0 after:transitionDuration-500 after:transition-opacity after:rounded-lg after:bg-spotlightEdge after:hover:opacity-100 after:z-1 

        before:h-full before:w-full before:left-0 before:opacity-0 before:absolute before:top-0 before:transitionDuration-500 before:transition-opacity before:rounded-lg before:bg-spotlight before:
        before:z-3 before:hover:opacity-100
            "
        >
          <div className="flex flex-col items-center px-6 gap-x-8  bg-slate-900 inset-[1px] p-2 absolute  rounded-lg z-2  md:flex-row">
            <div className="shrink-0">
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-auto w-36 hover:translate-y-1"
                  src={tetrisLogo}
                  alt="tetris-logo"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a
                  className="hover:text-cyan-400"
                  href="/demo/astro-boilerplate"
                >
                  <div className="text-xl font-semibold">Tetris</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-100">
                    HTML
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">
                    JavaScript
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-100">
                    CSS
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-400">
                Using Javascript to build a traditional Tetris game, showcasing
                JavaScript skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-4 relative">
        <div
          onMouseMove={handleMouseMove}
          className="
            bg-white/[0.03] rounded-lg   w-80 cursor-pointer   h-72 md:h-52
              
        after:h-full after:w-full after:left-0 after:opacity-0 after:absolute after:top-0 after:transitionDuration-500 after:transition-opacity after:rounded-lg after:bg-spotlightEdge after:hover:opacity-100 after:z-1 

        before:h-full before:w-full before:left-0 before:opacity-0 before:absolute before:top-0 before:transitionDuration-500 before:transition-opacity before:rounded-lg before:bg-spotlight before:
        before:z-3 before:hover:opacity-100
            "
        >
          <div className="flex flex-col items-center px-6 gap-x-8  bg-slate-900 inset-[1px] p-2 absolute  rounded-lg z-2  md:flex-row">
            <div className="shrink-0">
              <a href="/demo/astro-boilerplate">
                <img
                  className="h-auto w-36 hover:translate-y-1"
                  src={todoLogo}
                  alt="to-do-list-logo"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a
                  className="hover:text-cyan-400"
                  href="/demo/astro-boilerplate"
                >
                  <div className="text-xl font-semibold">To Do List</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-blue-500 text-blue-100">
                    React
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">
                    JavaScript
                  </div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-100">
                    CSS
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-400">
                Using JavaScript and React to build a shareable To Do List App,
                showcasing Front-end and Back-end skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

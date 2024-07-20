import React from "react";
import { ReactComponent as BrowserSVG } from "../assets/browser.svg";
import { ReactComponent as SqlSVG } from "../assets/sql.svg";
import { ReactComponent as GameSVG } from "../assets/game.svg";

export default function Skills() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <h1 className="mb-6 text-2xl font-bold bg-gradient-to-br from-sky-700 to-cyan-100 bg-clip-text text-transparent mt-5">
        Skills
      </h1>
      <div className="flex flex-wrap gap-2">
        <div className="z-4 relative">
          <div
            onMouseMove={handleMouseMove}
            className="
            bg-white/[0.03] rounded-lg  h-64 w-80
              
        after:h-full after:w-full after:left-0 after:opacity-0 after:absolute after:top-0 after:transitionDuration-500 after:transition-opacity after:rounded-lg after:bg-spotlightEdge after:hover:opacity-100 after:z-1 

        before:h-full before:w-full before:left-0 before:opacity-0 before:absolute before:top-0 before:transitionDuration-500 before:transition-opacity before:rounded-lg before:bg-spotlight before:
        before:z-3 before:hover:opacity-100
            "
          >
            <div className="bg-slate-900 inset-[1px] p-2 absolute  rounded-lg z-2 flex flex-col justify-center content-center ">
              <div className="items-center flex h-[152px] justify-center overflow-hidden mt-4 ">
                {<BrowserSVG className="w-40 opacity-25 text-white" />}
              </div>
              <div className="items-center flex grow justify-start py-0 px-5">
                <div className="items-start flex gap-2">
                  {<BrowserSVG className="h-5 w-5 leading-5" />}
                  <div>
                    <h3 className="text-lg leading-5">Front-end</h3>
                    <h4 className="text-sm text-white/[0.5] mt-2 leading-5">
                      HTML, CSS, JavaScript,
                      <br />
                      React, Tailwind CSS
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-4 relative">
          <div
            onMouseMove={handleMouseMove}
            className="
            bg-white/[0.03] rounded-lg  h-64 w-80
              
        after:h-full after:w-full after:left-0 after:opacity-0 after:absolute after:top-0 after:transitionDuration-500 after:transition-opacity after:rounded-lg after:bg-spotlightEdge after:hover:opacity-100 after:z-1 

        before:h-full before:w-full before:left-0 before:opacity-0 before:absolute before:top-0 before:transitionDuration-500 before:transition-opacity before:rounded-lg before:bg-spotlight before:
        before:z-3 before:hover:opacity-100
            "
          >
            <div className="bg-slate-900 inset-[1px] p-2 absolute  rounded-lg z-2 flex flex-col justify-center content-center ">
              <div className="items-center flex h-36 justify-center overflow-hidden mt-4 mb-2">
                {<SqlSVG className="w-40 opacity-25 text-white" />}
              </div>
              <div className="items-center flex grow justify-start py-0 px-5">
                <div className="items-start flex gap-2">
                  {<SqlSVG className="h-5 w-5 leading-5" />}
                  <div>
                    <h3 className="text-lg leading-5">Back-end</h3>
                    <h4 className="text-sm text-white/[0.5] mt-2 leading-5">
                      nodeJS, PostgreSQL, SQLite3,TypeScript
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-4 relative">
          <div
            onMouseMove={handleMouseMove}
            className="
            bg-white/[0.03] rounded-lg  h-64 w-80
              
        after:h-full after:w-full after:left-0 after:opacity-0 after:absolute after:top-0 after:transitionDuration-500 after:transition-opacity after:rounded-lg after:bg-spotlightEdge after:hover:opacity-100 after:z-1 

        before:h-full before:w-full before:left-0 before:opacity-0 before:absolute before:top-0 before:transitionDuration-500 before:transition-opacity before:rounded-lg before:bg-spotlight before:
        before:z-3 before:hover:opacity-100
            "
          >
            <div className="bg-slate-900 inset-[1px] p-2 absolute  rounded-lg z-2 flex flex-col justify-center content-center ">
              <div className="items-center flex h-36 justify-center overflow-hidden mt-4 -mb-4">
                {<GameSVG className="w-40 opacity-25 text-white" />}
              </div>
              <div className="items-center flex grow justify-start py-0 px-5">
                <div className="items-start flex gap-2">
                  {<GameSVG className="h-5 w-5 leading-5" />}
                  <div>
                    <h3 className="text-lg leading-5">Game Development</h3>
                    <h4 className="text-sm text-white/[0.5] mt-2 leading-5">
                      Unity, C#
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

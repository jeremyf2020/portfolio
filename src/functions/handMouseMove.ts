import React from "react";

export const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
  const target = e.target as HTMLDivElement;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

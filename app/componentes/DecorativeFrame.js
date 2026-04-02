import React from "react";

function DecorativeFrame() {
  return (
    <div className="fixed top-0 -z-10 h-screen grid grid-cols-2 gap-20 w-280">
      <div className="h-full w-full border-l border-r grid grid-cols-2 gap-12 border-zinc-200/50">
        <div className="h-full w-full border-r border-zinc-200/50"></div>
        <div className="h-full w-full border-l border-zinc-200/50"></div>
      </div>
      <div className="h-full w-full border-l border-r grid grid-cols-2 gap-12 border-zinc-200/50">
        <div className="h-full w-full border-r border-zinc-200/50"></div>
        <div className="h-full w-full border-l border-zinc-200/50"></div>
      </div>
    </div>
  );
}

export default DecorativeFrame;

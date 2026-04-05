"use client";

import React, { useEffect, useState } from "react";

function HoverCircles({ number, status }) {
  return (
    <div className="pointer-events-none absolute flex items-center justify-center">
      <svg
        className={`absolute ${number === 15 && "w-[500px] h-[500px]"} delay-650 duration-400 ${status ? "opacity-60" : "opacity-0"} animate-rotate`}
      >
        <circle
          cx="250"
          cy="250"
          r="240"
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <circle cx="250" cy="8" r="4" fill="#d4d4d8" />
      </svg>
      <svg
        className={`absolute ${number === 15 && "w-[350px] h-[350px]"} delay-500 duration-400 ${status ? "opacity-70" : "opacity-0"} animate-rotate`}
        viewBox="0 0 350 350"
      >
        <rect
          x="0"
          y="0"
          width="350"
          height="350"
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
        />
      </svg>
      <svg
        className={`absolute ${number === 15 && "w-[340px] h-[340px]"} delay-350 duration-400 ${status ? "opacity-80" : "opacity-0"} animate-rotate-r`}
      >
        <circle
          cx="170"
          cy="170"
          r="160"
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <circle cx="170" cy="8" r="4" fill="#d4d4d8" />
      </svg>
      <svg
        className={`absolute ${number === 15 && "w-[230px] h-[230px]"} delay-200 duration-400 ${status ? "opacity-90" : "opacity-0"} animate-rotate-r`}
        viewBox="0 0 230 230"
      >
        <rect
          x="0"
          y="0"
          width="230"
          height="230"
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default HoverCircles;

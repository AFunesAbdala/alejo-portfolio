"use client";

import React, { useEffect, useState } from "react";

function HoverCircles({ number, status }) {
  const sizeMap = {
    15: 500,
    8: 500,
    6: 610,
  };
  const size = sizeMap[number] || 610;
  const center = size / 2;
  return (
    <div className="pointer-events-none absolute flex items-center justify-center">
      <svg
        className={`absolute ${number === 15 || number === 8 && "w-[500px] h-[500px]"} ${number === 6 && "w-[610px] h-[610px]"} delay-650 duration-400 ${status ? "opacity-60" : "opacity-0"} animate-rotate`}
      >
        <circle
          cx={number === 15 || number === 8 ? 250 : number === 6 ? 305 : 305}
          cy={number === 15 || number === 8 ? 250 : number === 6 ? 305 : 305}
          r={number === 15 || number === 8 ? 240 : number === 6 ? 295 : 295}
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <circle
          cx={number === 15 || number === 8 ? 250 : number === 6 ? 305 : 305}
          cy="8"
          r="4"
          fill="#d4d4d8"
        />
      </svg>
      <svg
        className={`absolute ${number === 15 || number === 8 && "w-[350px] h-[350px]"} ${number === 6 && "w-[430px] h-[430px]"} delay-500 duration-400 ${status ? "opacity-70" : "opacity-0"} animate-rotate`}
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
        className={`absolute ${number === 15 || number === 8 && "w-[340px] h-[340px]"} ${number === 6 && "w-[420px] h-[420px]"} delay-350 duration-400 ${status ? "opacity-80" : "opacity-0"} animate-rotate-r`}
      >
        <circle
          cx={number === 15 || number === 8 ? 170 : number === 6 ? 210 : 210}
          cy={number === 15 || number === 8 ? 170 : number === 6 ? 210 : 210}
          r={number === 15 || number === 8 ? 160 : number === 6 ? 200 : 200}
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <circle
          cx={number === 15 || number === 8 ? 170 : number === 6 ? 210 : 210}
          cy="8"
          r="4"
          fill="#d4d4d8"
        />
      </svg>
      <svg
        className={`absolute ${number === 15 || number === 8 && "w-[230px] h-[230px]"} ${number === 6 && "w-[280px] h-[280px]"} delay-200 duration-400 ${status ? "opacity-90" : "opacity-0"} animate-rotate-r`}
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

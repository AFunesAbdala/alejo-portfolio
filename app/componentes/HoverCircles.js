"use client";

import React, { useEffect, useState } from "react";

function HoverCircles({ number, status }) {
  return (
    <div className="pointer-events-none absolute flex items-center justify-center">
      <svg
        className={`absolute ${number === 15 ? "w-[500px] h-[500px]" : number === 8 ? "w-[500px] h-[500px]" : number === 4 ? "w-[500px] h-[500px]" : number === 1 ? "w-[500px] h-[500px]" : number === 6 ? "w-[610px] h-[610px]" : "w-[330px] h-[330px]"} delay-650 duration-400 ${status ? "opacity-60" : "opacity-0"} animate-rotate`}
      >
        <circle
          cx={
            number === 15 ? 250 : number === 8 ? 250 : number === 4 ? 250 : number === 1 ? 250 : number === 6 ? 305 : 165
          }
          cy={
            number === 15 ? 250 : number === 8 ? 250 : number === 4 ? 250 : number === 1 ? 250 : number === 6 ? 305 : 165
          }
          r={
            number === 15 ? 240 : number === 8 ? 240 : number === 4 ? 240 : number === 1 ? 250 : number === 6 ? 295 : 155
          }
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <circle
          cx={
            number === 15 ? 250 : number === 8 ? 250 : number === 4 ? 250 : number === 1 ? 250 : number === 6 ? 305 : 165
          }
          cy="8"
          r="4"
          fill="#d4d4d8"
        />
      </svg>
      <svg
        className={`absolute ${number === 15 ? "w-[350px] h-[350px]" : number === 8 ? "w-[350px] h-[350px]" : number === 4 ? "w-[350px] h-[350px]" : number === 1 ? "w-[350px] h-[350px]" : number === 6 ? "w-[430px] h-[430px]" : "w-[230px] h-[230px]"} delay-500 duration-400 ${status ? "opacity-70" : "opacity-0"} animate-rotate`}
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
        className={`absolute ${number === 15 ? "w-[340px] h-[340px]" : number === 8 ? "w-[340px] h-[340px]" : number === 4 ? "w-[340px] h-[340px]" : number === 1 ? "w-[340px] h-[340px]" : number === 6 ? "w-[420px] h-[420px]" : "w-[220px] h-[220px]"} delay-350 duration-400 ${status ? "opacity-80" : "opacity-0"} animate-rotate-r`}
      >
        <circle
          cx={
            number === 15 ? 170 : number === 8 ? 170 : number === 4 ? 170 : number === 1 ? 250 : number === 6 ? 210 : 110
          }
          cy={
            number === 15 ? 170 : number === 8 ? 170 : number === 4 ? 170 : number === 1 ? 250 : number === 6 ? 210 : 110
          }
          r={
            number === 15 ? 160 : number === 8 ? 160 : number === 4 ? 160 : number === 1 ? 250 : number === 6 ? 200 : 100
          }
          fill="none"
          stroke="#d4d4d8"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <circle
          cx={
            number === 15 ? 170 : number === 8 ? 170 : number === 4 ? 170 : number === 1 ? 250 : number === 6 ? 210 : 110
          }
          cy="8"
          r="4"
          fill="#d4d4d8"
        />
      </svg>
      <svg
        className={`absolute ${number === 15 ? "w-[230px] h-[230px]" : number === 8 ? "w-[230px] h-[230px]" : number === 4 ? "w-[230px] h-[230px]" : number === 1 ? "w-[230px] h-[230px]" : number === 6 ? "w-[280px] h-[280px]" : "w-[140px] h-[140px]"} delay-200 duration-400 ${status ? "opacity-90" : "opacity-0"} animate-rotate-r`}
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

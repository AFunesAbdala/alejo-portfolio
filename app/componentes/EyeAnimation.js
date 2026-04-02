"use client";

import React, { useEffect, useRef, useState } from "react";

function EyeAnimation() {
  const containerRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [, forceRender] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      target.current = {
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let frame;

    const lerp = (start, end, t) => start + (end - start) * t;

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.1);
      current.current.y = lerp(current.current.y, target.current.y, 0.1);

      forceRender((n) => n + 1); // re-render

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  // 🔥 función límite
  const limit = (x, y, max) => {
    const dist = Math.sqrt(x * x + y * y);
    if (dist > max) {
      const angle = Math.atan2(y, x);
      return {
        x: Math.cos(angle) * max,
        y: Math.sin(angle) * max,
      };
    }
    return { x, y };
  };

  // 📏 RADIOS (basados en tu diseño)
  const R_BIG = 358; // rojo interno (715px)
  const R_IRIS = 260; // 440px
  const R_PUPIL = 130; // 150px

  const iris = limit(current.current.x, current.current.y, 100);
  const pupil = limit(current.current.x, current.current.y, 130);

  return (
    <div
      ref={containerRef}
      style={{
        width: 800,
        height: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="800" height="800" viewBox="0 0 800 800">
        {/* CIRCULOS GRANDES (solo rotación) */}
        <g className="rotateSlow">
          <circle
            cx="400"
            cy="400"
            r="370"
            stroke="#E4E4E7"
            fill="none"
            strokeDasharray="1500"
          />
        </g>
        <g className="rotateSlowR">
          <circle
            cx="400"
            cy="400"
            r="360"
            stroke="#A1A1AA"
            fill="none"
            strokeDasharray="1500"
            style={{
              transform: "rotate(45deg)",
              transformOrigin: "400px 400px",
            }}
          />
        </g>

        {/* 🔵 IRIS */}
        <g
          className="rotateSlow"
          style={{
            transformOrigin: `${400 + iris.x}px ${400 + iris.y}px`,
          }}
        >
          <g transform={`translate(${iris.x}, ${iris.y})`}>
            <circle
              cx="400"
              cy="400"
              r="220"
              stroke="#E4E4E7"
              fill="none"
              strokeDasharray="1000"
            />
          </g>
        </g>

        <g
          className="rotateSlowR"
          style={{
            transformOrigin: `${400 + iris.x}px ${400 + iris.y}px`,
          }}
        >
          <g transform={`translate(${iris.x}, ${iris.y})`}>
            <circle
              cx="400"
              cy="400"
              r="210"
              stroke="#A1A1AA"
              fill="none"
              strokeDasharray="1000"
            />
          </g>
        </g>

        {/* 🟢 PUPILA */}
        <g
          className="rotateSlow"
          style={{
            transformOrigin: `${400 + pupil.x}px ${400 + pupil.y}px`,
          }}
        >
          <g transform={`translate(${pupil.x}, ${pupil.y})`}>
            <circle
              cx="400"
              cy="400"
              r="75"
              stroke="#A1A1AA"
              fill="none"
              strokeDasharray="350"
            />
          </g>
        </g>

        <style>{`
          .rotateSlow {
            transform-origin: 400px 400px;
            animation: rotate 15s linear infinite;
          }

          .rotateSlowR {
            transform-origin: 400px 400px;
            animation: rotate2 15s linear infinite;
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rotate2 {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </svg>
    </div>
  );
}

export default EyeAnimation;

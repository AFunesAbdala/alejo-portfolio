"use client";

import React, { useEffect, useRef, useState } from "react";

function EyeAnimation() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      setPos({ x: dx, y: dy });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const iris = limit(pos.x, pos.y, 30);
  const pupil = limit(pos.x, pos.y, 30);

  return (
    <div
      ref={containerRef}
      style={{
        width: 200,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="200" height="200">
        {/* ojo (fijo) */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />

        {/* iris */}
        <circle
          cx={100 + iris.x}
          cy={100 + iris.y}
          r="40"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />

        {/* pupila */}
        <circle
          cx={100 + pupil.x}
          cy={100 + pupil.y}
          r="15"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default EyeAnimation;

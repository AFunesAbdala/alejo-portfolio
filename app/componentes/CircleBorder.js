export function CircleBorder({ rotate = -90, r = 50, color = "#d4d4d8" }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${rotate}`}>
      <circle
        cx="50%"
        cy="50%"
        r={r}
        stroke={color}
        strokeWidth="1"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="0.25"
      />
    </svg>
  );
}

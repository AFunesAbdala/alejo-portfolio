export function CircleBorder({ rotate = -90, r = 50 }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${rotate}`}>
      <circle
        cx="50%"
        cy="50%"
        r={r}
        stroke="#d4d4d8"
        strokeWidth="1"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="0.25"
      />
    </svg>
  );
}

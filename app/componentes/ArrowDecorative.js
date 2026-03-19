export function ArrowDecorative() {
  return (
    <svg className="absolute left-0 w-[50vw] h-20 pointer-events-none">
      <defs>
        <marker
          id="arrow"
          markerWidth="5"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L5,5 L0,10" fill="none" stroke="#18181b" />
        </marker>
      </defs>

      <line
        x1="0"
        y1="40"
        x2="100%"
        y2="40"
        stroke="#09090B"
        strokeWidth="1"
        markerEnd="url(#arrow)"
        strokeLinecap="round"
      />
    </svg>
  );
}

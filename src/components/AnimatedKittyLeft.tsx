export const AnimatedKittyLeft = () => {
  return (
    <svg
      viewBox="0 0 300 300"
      className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]"
      style={{
        filter: "drop-shadow(0 6px 12px rgba(236, 72, 153, 0.4))",
      }}
    >
      {/* Head */}
      <g className="animate-[float_3s_ease-in-out_infinite]">
        <ellipse
          cx="150"
          cy="115"
          rx="90"
          ry="75"
          fill="white"
          stroke="black"
          strokeWidth="4"
        />

        {/* Left Ear */}
        <path
          d="M90 55 C70 15, 120 15, 100 65"
          fill="white"
          stroke="black"
          strokeWidth="4"
          className="animate-[wiggle_3s_ease-in-out_infinite]"
          style={{ transformOrigin: "95px 80px" }}
        />

        {/* Right Ear */}
        <path
          d="M210 55 C230 15, 180 15, 200 65"
          fill="white"
          stroke="black"
          strokeWidth="4"
          className="animate-[wiggle_3s_ease-in-out_infinite_0.1s]"
          style={{ transformOrigin: "205px 80px" }}
        />

        {/* 🎀 Bow (improved stability) */}
        <g transform="translate(205, 65)">
          {/* Bow base — slight pulse, not bounce */}
          <g className="animate-[gentlePulse_4s_ease-in-out_infinite]">
            <ellipse
              cx="-15"
              cy="0"
              rx="25"
              ry="18"
              fill="#ef4444"
              stroke="black"
              strokeWidth="2.5"
            />
            <ellipse
              cx="15"
              cy="0"
              rx="25"
              ry="18"
              fill="#ef4444"
              stroke="black"
              strokeWidth="2.5"
            />
            <circle
              cx="0"
              cy="0"
              r="10"
              fill="#dc2626"
              stroke="black"
              strokeWidth="2"
            />
          </g>
        </g>

        {/* Eyes */}
        <circle
          cx="120"
          cy="115"
          r="6"
          fill="black"
          className="animate-[blink_4s_ease-in-out_infinite]"
        />
        <circle
          cx="180"
          cy="115"
          r="6"
          fill="black"
          className="animate-[blink_4s_ease-in-out_infinite]"
        />

        {/* Nose */}
        <ellipse
          cx="150"
          cy="135"
          rx="6"
          ry="5"
          fill="#fbbf24"
          stroke="black"
          strokeWidth="1.8"
        />

        {/* Whiskers Left */}
        <line
          x1="90"
          y1="125"
          x2="45"
          y2="115"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="90"
          y1="135"
          x2="45"
          y2="135"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="90"
          y1="145"
          x2="45"
          y2="155"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Whiskers Right */}
        <line
          x1="210"
          y1="125"
          x2="255"
          y2="115"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="210"
          y1="135"
          x2="255"
          y2="135"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="210"
          y1="145"
          x2="255"
          y2="155"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Body */}
      <ellipse
        cx="150"
        cy="210"
        rx="70"
        ry="55"
        fill="#ef4444"
        stroke="black"
        strokeWidth="4"
        className="animate-[float_3s_ease-in-out_infinite_0.2s]"
      />

      {/* Chest patch */}
      <path
        d="M105 195 Q150 220 195 195 Q150 205 105 195 Z"
        fill="#f9a8d4"
        stroke="black"
        strokeWidth="2.5"
      />

      {/* Arms */}
      <ellipse
        cx="80"
        cy="205"
        rx="25"
        ry="30"
        fill="white"
        stroke="black"
        strokeWidth="3"
        className="animate-[wave_2.5s_ease-in-out_infinite]"
        style={{ transformOrigin: "80px 180px" }}
      />
      <ellipse
        cx="220"
        cy="205"
        rx="25"
        ry="30"
        fill="white"
        stroke="black"
        strokeWidth="3"
        className="animate-[wave_2.5s_ease-in-out_infinite_1s]"
        style={{ transformOrigin: "220px 180px" }}
      />

      {/* Legs */}
      <ellipse
        cx="120"
        cy="255"
        rx="25"
        ry="18"
        fill="white"
        stroke="black"
        strokeWidth="3"
      />
      <ellipse
        cx="180"
        cy="255"
        rx="25"
        ry="18"
        fill="white"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};

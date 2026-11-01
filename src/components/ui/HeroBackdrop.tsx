export function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 76% 28%, rgba(17,167,161,0.16), transparent 62%), radial-gradient(ellipse 55% 55% at 12% 88%, rgba(12,92,138,0.24), transparent 68%)",
        }}
      />

      <div className="grid-field absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent_88%)]" />
      <div className="dot-field absolute -right-[8%] top-0 h-[88%] w-[68%] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-route-a" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#5DD6D0" stopOpacity="0" />
            <stop offset="0.45" stopColor="#5DD6D0" stopOpacity="0.4" />
            <stop offset="0.75" stopColor="#11A7A1" stopOpacity="0.3" />
            <stop offset="1" stopColor="#0C5C8A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-route-b" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#0C5C8A" stopOpacity="0" />
            <stop offset="0.5" stopColor="#5DD6D0" stopOpacity="0.22" />
            <stop offset="1" stopColor="#5DD6D0" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g>
          <circle
            cx="1120"
            cy="400"
            r="300"
            stroke="#5DD6D0"
            strokeOpacity="0.055"
          />
          <circle
            cx="1120"
            cy="400"
            r="390"
            stroke="#5DD6D0"
            strokeOpacity="0.04"
            strokeDasharray="2 12"
          />
          <circle
            cx="1120"
            cy="400"
            r="470"
            stroke="#5DD6D0"
            strokeOpacity="0.025"
          />
        </g>

        <g>
          <path
            d="M-80 690C220 470 400 790 700 575C900 430 1040 330 1500 360"
            stroke="url(#hero-route-a)"
            strokeWidth="1.1"
          />
          <path
            d="M120 980C300 730 560 800 770 585C930 420 1080 300 1390 220"
            stroke="url(#hero-route-b)"
            strokeWidth="1"
          />
          <path
            d="M700 575C860 450 990 355 1102 238"
            stroke="#5DD6D0"
            strokeOpacity="0.28"
            strokeDasharray="4 10"
            className="animate-route-dash"
          />
          <path
            d="M-20 200C200 160 300 240 450 120"
            stroke="url(#hero-route-b)"
            strokeWidth="1"
            strokeDasharray="3 9"
          />
        </g>

        <g>
          <g className="animate-pulse-node">
            <circle cx="700" cy="575" r="3" fill="#5DD6D0" />
            <circle
              cx="700"
              cy="575"
              r="11"
              stroke="#5DD6D0"
              strokeOpacity="0.16"
            />
          </g>
          <g className="animate-pulse-node [animation-delay:1.8s]">
            <circle cx="1102" cy="238" r="3" fill="#5DD6D0" />
            <circle
              cx="1102"
              cy="238"
              r="11"
              stroke="#5DD6D0"
              strokeOpacity="0.16"
            />
          </g>
          <g className="animate-pulse-node [animation-delay:3.2s]">
            <circle cx="770" cy="585" r="2.4" fill="#11A7A1" />
            <circle
              cx="770"
              cy="585"
              r="9"
              stroke="#11A7A1"
              strokeOpacity="0.16"
            />
          </g>
        </g>

        <g
          fill="#5DD6D0"
          fillOpacity="0.38"
          fontFamily="'JetBrains Mono Variable', monospace"
          fontSize="8.5"
          letterSpacing="2"
        >
          <text x="716" y="564">SGN / VN</text>
          <text x="1118" y="234">PNH / KH</text>
        </g>

        <g stroke="#F3F7F9" strokeOpacity="0.1">
          <path d="M1030 138h14M1037 131v14" />
          <path d="M250 300h10M255 295v10" />
          <path d="M1280 700h14M1287 693v14" />
        </g>
      </svg>

      <div className="noise-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </div>
  );
}

/* Snoopy lying on his red doghouse — flat SVG illustration */
export default function SnoopyIllustration({ className = '', size = 320 }) {
  return (
    <svg
      viewBox="0 0 340 260"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      className={className}
      aria-label="Snoopy lying on his doghouse"
    >
      {/* ─── Doghouse ─── */}
      {/* House body */}
      <rect x="60" y="160" width="220" height="90" rx="6" fill="#B03A2E" />
      {/* House roof */}
      <polygon points="45,168 170,118 295,168" fill="#922B21" />
      {/* Roof ridge cap */}
      <rect x="158" y="114" width="24" height="12" rx="4" fill="#7B241C" />
      {/* House entrance */}
      <ellipse cx="170" cy="235" rx="36" ry="22" fill="#7B241C" />
      {/* House entrance top */}
      <rect x="134" y="213" width="72" height="22" fill="#7B241C" />
      {/* House window detail */}
      <rect x="90" y="178" width="28" height="22" rx="3" fill="#922B21" />
      <rect x="230" y="178" width="28" height="22" rx="3" fill="#922B21" />

      {/* ─── Snoopy body (lying on roof) ─── */}
      {/* Main body — elongated white blob */}
      <ellipse cx="170" cy="130" rx="80" ry="30" fill="white" />
      {/* Black body spot */}
      <ellipse cx="125" cy="132" rx="34" ry="20" fill="#1C1C1C" />
      {/* White tummy patch */}
      <ellipse cx="128" cy="134" rx="22" ry="13" fill="white" />

      {/* Back paw (right) */}
      <ellipse cx="240" cy="150" rx="18" ry="9" fill="white" />
      <ellipse cx="240" cy="153" rx="18" ry="7" fill="#F0EDE0" />
      {/* Front paw (left) */}
      <ellipse cx="90" cy="148" rx="16" ry="8" fill="white" />
      <ellipse cx="90" cy="151" rx="16" ry="7" fill="#F0EDE0" />

      {/* ─── Snoopy head ─── */}
      <circle cx="232" cy="108" r="34" fill="white" />
      {/* Head shadow / definition */}
      <ellipse cx="228" cy="118" rx="24" ry="16" fill="#F0EDE0" opacity="0.6" />

      {/* Left ear (floppy, black) */}
      <ellipse
        cx="210" cy="90"
        rx="13" ry="22"
        fill="#1C1C1C"
        transform="rotate(-18 210 90)"
      />
      {/* Right ear (back, shorter) */}
      <ellipse
        cx="252" cy="88"
        rx="10" ry="18"
        fill="#2C2C2C"
        transform="rotate(22 252 88)"
      />

      {/* Snout / muzzle area */}
      <ellipse cx="256" cy="114" rx="16" ry="11" fill="#F0EDE0" />
      {/* Nose */}
      <ellipse cx="265" cy="109" rx="9" ry="7" fill="#1C1C1C" />
      {/* Nose highlight */}
      <ellipse cx="263" cy="107" rx="3" ry="2" fill="white" opacity="0.5" />

      {/* Eye */}
      <circle cx="244" cy="103" r="5" fill="#1C1C1C" />
      <circle cx="243" cy="102" r="1.5" fill="white" />

      {/* Smile */}
      <path
        d="M251 118 Q259 124 267 118"
        stroke="#1C1C1C"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ─── Tail ─── */}
      <path
        d="M88 128 Q68 108 75 90 Q82 72 95 80"
        stroke="white"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        className="animate-tail"
      />
      <path
        d="M88 128 Q68 108 75 90 Q82 72 95 80"
        stroke="#E8E4D4"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        className="animate-tail"
        opacity="0.5"
      />

      {/* ─── Woodstock (tiny yellow bird beside doghouse) ─── */}
      <g transform="translate(54, 188)">
        {/* Body */}
        <ellipse cx="12" cy="14" rx="9" ry="8" fill="#F5C030" />
        {/* Head */}
        <circle cx="12" cy="5" r="7" fill="#F5C030" />
        {/* Beak */}
        <path d="M17 5 L22 4 L17 7 Z" fill="#E8A020" />
        {/* Eye */}
        <circle cx="14" cy="4" r="1.5" fill="#1C1C1C" />
        {/* Feet */}
        <line x1="9" y1="22" x2="7" y2="28" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="22" x2="12" y2="28" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="22" x2="17" y2="28" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" />
        {/* Tuft on head */}
        <path d="M9 -1 Q10 -6 12 -2 Q12 -7 15 -3 Q15 -8 17 -2" stroke="#E8A020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* ─── Small flowers on ground ─── */}
      <g opacity="0.8">
        <circle cx="40" cy="245" r="4" fill="#F5C030" />
        <circle cx="40" cy="238" r="3" fill="white" />
        <circle cx="34" cy="243" r="3" fill="white" />
        <circle cx="46" cy="243" r="3" fill="white" />
        <circle cx="40" cy="248" r="3" fill="white" />
      </g>
      <g opacity="0.6">
        <circle cx="300" cy="245" r="3" fill="#F5C030" />
        <circle cx="300" cy="240" r="2.5" fill="white" />
        <circle cx="295" cy="244" r="2.5" fill="white" />
        <circle cx="305" cy="244" r="2.5" fill="white" />
      </g>

      {/* ─── Stars / sparkles ─── */}
      <g fill="#F5C030" opacity="0.7">
        <path d="M310 60 L312 55 L314 60 L319 62 L314 64 L312 69 L310 64 L305 62 Z" />
        <path d="M50 75 L51.5 71 L53 75 L57 76.5 L53 78 L51.5 82 L50 78 L46 76.5 Z" transform="scale(0.7) translate(22 38)" />
      </g>
    </svg>
  )
}

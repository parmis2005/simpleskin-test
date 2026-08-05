export default function OrchidIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* stem */}
      <path d="M200 500 C 194 440, 206 400, 200 330" />
      {/* leaf */}
      <path d="M200 455 C 158 447, 136 418, 146 396 C 178 405, 199 428, 200 455 Z" />

      {/* upper petal */}
      <path d="M200 185 C 178 148, 178 95, 200 58 C 222 95, 222 148, 200 185 Z" />
      {/* left upper petal */}
      <path d="M200 185 C 158 165, 116 132, 96 90 C 140 90, 177 122, 200 185 Z" />
      {/* right upper petal */}
      <path d="M200 185 C 242 165, 284 132, 304 90 C 260 90, 223 122, 200 185 Z" />
      {/* left side petal */}
      <path d="M200 196 C 148 194, 96 214, 64 254 C 106 276, 160 256, 200 196 Z" />
      {/* right side petal */}
      <path d="M200 196 C 252 194, 304 214, 336 254 C 294 276, 240 256, 200 196 Z" />
      {/* labellum / lip */}
      <path d="M200 192 C 178 222, 160 262, 170 302 C 178 316, 194 324, 200 324 C 206 324, 222 316, 230 302 C 240 262, 222 222, 200 192 Z" />
      <path d="M186 300 C 192 288, 208 288, 214 300" />
      {/* throat */}
      <circle cx="200" cy="198" r="5" />
    </svg>
  );
}

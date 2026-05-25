export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-2xl shadow-md ring-2 ring-white"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #FFB84D 0%, #FF8A80 55%, #B79CED 100%)",
        }}
      >
        {/* Custom mark: senyum + percikan = ceria + inklusif */}
        <svg
          width={size * 0.62}
          height={size * 0.62}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wajah ceria putih */}
          <circle cx="12" cy="12" r="9" fill="white" />
          {/* Mata kiri */}
          <circle cx="9" cy="10.5" r="1.1" fill="#1F2937" />
          {/* Mata kanan */}
          <circle cx="15" cy="10.5" r="1.1" fill="#1F2937" />
          {/* Senyum lengkung */}
          <path
            d="M8.5 14.5C9.5 16 10.7 16.6 12 16.6C13.3 16.6 14.5 16 15.5 14.5"
            stroke="#1F2937"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Pipi rona — kiri (oranye) */}
          <circle cx="7" cy="13.2" r="0.9" fill="#FFB84D" opacity="0.7" />
          {/* Pipi rona — kanan (pink) */}
          <circle cx="17" cy="13.2" r="0.9" fill="#FF8A80" opacity="0.7" />
        </svg>
      </span>
      <span
        className="font-extrabold text-ink leading-none tracking-tight"
        style={{ fontSize: size * 0.55 }}
      >
        Inklusi{" "}
        <span className="bg-gradient-to-r from-sun-dark via-coral to-lavender-dark bg-clip-text text-transparent">
          Ceria
        </span>
      </span>
    </span>
  );
}

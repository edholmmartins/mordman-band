// components/SocialLink.js
export default function SocialLink({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group relative
        flex items-center justify-center gap-3
        rounded-xl p-4
        border border-white/15
        transition-all duration-300
        hover:scale-[1.03]
        hover:border-[rgba(125,255,77,0.7)]
        hover:shadow-[0_0_25px_rgba(125,255,77,0.45)]
        overflow-hidden
      "
      style={{
        background: `linear-gradient(135deg, #050505, #0a0a0a 60%, black)`,
      }}
    >
      {/* Hover overlay */}
      <div
        className="
          absolute inset-0 
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
        style={{
          background: `linear-gradient(
            120deg,
            rgba(125,255,77,0.12) 0%,
            rgba(107,42,165,0.45) 40%,
            transparent 80%
          )`,
        }}
      />

      {/* Soft neon sweep */}
      <div
        className="
          absolute inset-0 pointer-events-none 
          opacity-0 group-hover:opacity-30
          transition-all duration-700
          blur-2xl
        "
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(125,255,77,0.35), transparent 60%)`,
          transform: "scale(1.4)",
        }}
      />

      {/* Icon + Text */}
      <div className="relative z-10 flex items-center gap-3">
        <Icon
          className="
            h-5 w-5 
            transition-all duration-300
            group-hover:text-[#7DFF4D]
            drop-shadow-[0_0_6px_rgba(125,255,77,0.5)]
          "
        />
        <span
          className="
            font-medium
            transition-colors duration-300
            group-hover:text-[#7DFF4D]
          "
        >
          {label}
        </span>
      </div>
    </a>
  );
}
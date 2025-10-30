export default function SocialLink({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 p-4 hover:bg-white hover:text-black transition"
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </a>
  );
}

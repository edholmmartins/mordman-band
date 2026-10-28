import Link from "next/link";

// Minimal inline markup used in the landing-page copy:
// **fetstil**, [länktext](/sökväg) och boka@mordman.se (blir mailto-länk).
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|boka@mordman\.se)/g;

export function renderInline(text) {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;

    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{renderInline(bold[1])}</strong>;

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={i} href={link[2]} className="underline decoration-white/40 underline-offset-4 hover:text-[#7DFF4D] hover:decoration-[#7DFF4D]">
          {link[1]}
        </Link>
      );
    }

    if (part === "boka@mordman.se") {
      return (
        <a key={i} href="mailto:boka@mordman.se?subject=Bokning" className="underline decoration-white/40 underline-offset-4 hover:text-[#7DFF4D]">
          {part}
        </a>
      );
    }

    return part;
  });
}

// Same text without markup, for JSON-LD.
export function plainText(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

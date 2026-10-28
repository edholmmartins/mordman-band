import Link from "next/link";
import { eventPages, regionPages } from "./pages";

const home = { path: "/", label: "Gävle & Gästrikland" };

function LinkList({ title, items, current }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black uppercase">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            {item.path === current ? (
              <span className="text-white" aria-current="page">{item.label}</span>
            ) : (
              <Link
                href={item.path}
                className="underline decoration-white/40 underline-offset-4 hover:text-[#7DFF4D] hover:decoration-[#7DFF4D]"
              >
                {item.label}
              </Link>
            )}
            {item.hint && <span className="text-white/60"> – {item.hint}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

// "Vi spelar på…" / "Vi spelar i…" – used on the homepage and every landing page.
export default function LandingLinks({ current }) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2">
        <LinkList title="Vi spelar på…" items={eventPages} current={current} />
        <LinkList title="Vi spelar i…" items={[home, ...regionPages]} current={current} />
      </div>
    </section>
  );
}

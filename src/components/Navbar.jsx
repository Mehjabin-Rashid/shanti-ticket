import { useState } from "react";
import { Bus, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Destination", "#destination"],
  ["Search", "#search"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative flex items-center justify-between py-6 lg:pb-[1.6rem] lg:pt-[2.65rem]">
      <a href="#home" className="font-raleway text-2xl font-extrabold tracking-tight lg:text-[1.75rem]">
        Shanti-Ticket
      </a>

      <nav className="absolute top-[2.65rem] left-1/2 hidden h-[3.25rem] -translate-x-1/2 items-center gap-[3.2rem] font-raleway text-[0.9375rem] font-medium text-slate-700 lg:flex">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="transition hover:text-black">{label}</a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="#search"
          className="inline-flex items-center gap-2 rounded-lg border border-brand/40 bg-brand/10 px-4 py-2 font-raleway text-sm font-bold text-brand-dark transition hover:bg-brand/20 lg:h-[3.25rem] lg:rounded-[0.85rem] lg:px-5 lg:text-base"
        >
          Bus <Bus className="h-4 w-4 lg:h-5 lg:w-5" />
        </a>
        <button type="button" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="rounded-lg p-2 lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full z-20 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-lg lg:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

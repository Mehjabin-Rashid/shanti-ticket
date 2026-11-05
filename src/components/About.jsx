import { BusFront, ShieldCheck, Ticket } from "lucide-react";

const items = [
  { icon: BusFront, title: "Every route in one place", text: "Compare AC and Non-AC coaches, timings and fares without calling counters." },
  { icon: Ticket, title: "Your ticket in minutes", text: "Choose your seat, enter your details and get a booking ID right away." },
  { icon: ShieldCheck, title: "Trusted partners", text: "We work with registered rental and coach partners across the country." },
];

export default function About() {
  return (
    <section id="about" className="wrap pt-20">
      <h2 className="font-raleway text-3xl font-bold">Why Shanti-Ticket</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon className="h-8 w-8 text-brand" strokeWidth={1.5} />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

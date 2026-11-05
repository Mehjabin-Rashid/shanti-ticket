import { BusFront, Ticket, Users } from "lucide-react";
import { heroImg } from "../data.js";

const stats = [
  { icon: Users, value: "500K+", label: "Registered users" },
  { icon: Ticket, value: "1.7 lakh", label: "Tickets sold" },
  { icon: BusFront, value: "80K+", label: "Rental partners" },
];

export default function Hero() {
  return (
    <section id="home">
      {/* Design: hero 1040 x 490, radius 32 */}
      <div className="relative overflow-hidden rounded-3xl lg:h-[30.625rem] lg:rounded-[2rem]">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative flex flex-col items-center px-6 pb-28 pt-14 text-center lg:px-0 lg:pb-0 lg:pt-[3.9rem]">
          <h1 className="font-raleway text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[4.8rem]">
            End-to-End Travel with<br />
            <span className="text-brand">Shanti Paribahan</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 lg:mt-[0.85rem] lg:max-w-[36.5rem] lg:text-[0.9rem] lg:leading-[1.7rem]">
            Compare routes, book your seat and board with confidence. Every step of your bus journey, in one place.
          </p>
          <a
            href="#search"
            className="mt-6 inline-flex items-center rounded-xl bg-brand px-7 py-3 text-base font-semibold text-slate-900 transition hover:brightness-95 lg:mt-7 lg:h-[3.55rem] lg:rounded-[0.85rem] lg:px-[1.7rem] lg:py-0"
          >
            Buy Tickets
          </a>
        </div>
      </div>

      {/* Design: 3 cards of 272px, 24px gap, overlapping the hero by 62px */}
      <div className="relative -mt-10 grid gap-4 px-4 sm:grid-cols-3 sm:px-8 lg:mx-auto lg:-mt-[3.875rem] lg:w-[54rem] lg:gap-6 lg:px-0">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border-b-[3px] border-brand bg-white px-6 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.07)] lg:gap-5 lg:rounded-[1.25rem] lg:px-[2.1rem] lg:py-[1.6rem]"
          >
            <Icon className="h-9 w-9 shrink-0 text-brand lg:h-[2.8rem] lg:w-[2.8rem]" strokeWidth={1.5} />
            <div>
              <p className="text-2xl font-bold leading-none lg:text-[2rem]">{value}</p>
              <p className="mt-1 text-xs text-slate-500 lg:mt-[0.45rem] lg:text-base">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

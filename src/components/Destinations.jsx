import { destinations } from "../data.js";

export default function Destinations({ onPick }) {
  return (
    <section id="destination" className="wrap pt-20">
      <h2 className="font-raleway text-3xl font-bold">Where to next?</h2>
      <p className="mt-2 text-sm text-slate-500">Pick a destination and we'll set up your search.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {destinations.map((d) => (
          <button
            key={d.name}
            type="button"
            onClick={() => onPick(d.to)}
            className={`group relative h-48 overflow-hidden rounded-2xl text-left text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${d.grad ? `bg-gradient-to-br ${d.grad}` : "bg-slate-800"}`}
          >
            {d.image && <img src={d.image} alt="" className="absolute inset-0 h-full w-full object-cover object-bottom transition duration-500 group-hover:scale-105" />}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-raleway text-xl font-bold">{d.name}</h3>
              <p className="mt-1 text-sm text-white/85">{d.blurb}</p>
              <span className="mt-3 inline-block rounded-md bg-brand px-3 py-1 text-xs font-semibold text-slate-900">Find buses</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

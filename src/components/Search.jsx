import { useState } from "react";
import { ArrowRightLeft, CalendarDays, Clock, MapPin, Search as SearchIcon, X } from "lucide-react";
import { cities, findBuses } from "../data.js";

const field = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30";

function Booking({ bus, date, onClose }) {
  const [seats, setSeats] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ref, setRef] = useState(null);
  const valid = name.trim().length > 1 && /^01\d{9}$/.test(phone);
  const confirm = () => setRef("ST-" + Math.random().toString(36).slice(2, 8).toUpperCase());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-raleway text-lg font-bold">{bus.from} to {bus.to}</h3>
            <p className="text-xs text-slate-500">{bus.name} · {bus.type} · {date} · {bus.dep}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-lg p-1 hover:bg-slate-100"><X size={18} /></button>
        </div>

        {ref ? (
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">Ticket booked for {name}</p>
            <p className="mt-2 font-raleway text-3xl font-extrabold text-brand-dark">{ref}</p>
            <p className="mt-2 text-xs text-slate-500">{seats} seat{seats > 1 ? "s" : ""} · Total ৳{bus.fare * seats}</p>
            <button type="button" onClick={onClose} className="mt-6 w-full rounded-lg bg-brand py-2.5 text-sm font-semibold text-slate-900">Done</button>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            <input className={field} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className={field} placeholder="Phone (01XXXXXXXXX)" inputMode="numeric" maxLength={11} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} />
            <div className="flex items-center justify-between text-sm">
              <span>Seats</span>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setSeats((s) => Math.max(1, s - 1))} className="h-8 w-8 rounded-lg border border-slate-200">-</button>
                <span className="w-4 text-center font-semibold">{seats}</span>
                <button type="button" onClick={() => setSeats((s) => Math.min(4, bus.seats, s + 1))} className="h-8 w-8 rounded-lg border border-slate-200">+</button>
              </div>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-3 text-sm font-semibold">
              <span>Total</span><span>৳{bus.fare * seats}</span>
            </div>
            <button type="button" disabled={!valid} onClick={confirm} className="w-full rounded-lg bg-brand py-2.5 text-sm font-semibold text-slate-900 transition enabled:hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50">
              Confirm booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Search({ search, setSearch }) {
  const { from, to, date } = search;
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const today = new Date().toISOString().slice(0, 10);
  const set = (k, v) => setSearch((s) => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (!from || !to || from === to) {
      setResults(null);
      return setError("Pick two different cities.");
    }
    setError("");
    setResults(findBuses(from, to));
  };

  return (
    <section id="search" className="wrap pt-20">
      <h2 className="font-raleway text-3xl font-bold">Find your bus</h2>
      <form onSubmit={submit} className="mt-6 grid gap-3 rounded-2xl border border-slate-200 p-4 shadow-sm sm:grid-cols-[1fr_auto_1fr_1fr_auto] sm:items-end">
        <label className="text-xs font-medium text-slate-500">From
          <select className={`${field} mt-1`} value={from} onChange={(e) => set("from", e.target.value)}>
            <option value="">Select city</option>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <button type="button" aria-label="Swap cities" onClick={() => setSearch((s) => ({ ...s, from: s.to, to: s.from }))} className="mx-auto rounded-lg border border-slate-200 p-2.5 hover:bg-slate-50">
          <ArrowRightLeft size={16} />
        </button>
        <label className="text-xs font-medium text-slate-500">To
          <select className={`${field} mt-1`} value={to} onChange={(e) => set("to", e.target.value)}>
            <option value="">Select city</option>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="text-xs font-medium text-slate-500">Date
          <input type="date" min={today} className={`${field} mt-1`} value={date} onChange={(e) => set("date", e.target.value)} />
        </label>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-slate-900 hover:brightness-95">
          <SearchIcon size={16} /> Search
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {results && results.length === 0 && <p className="mt-4 text-sm text-slate-500">No buses on this route yet. Try Dhaka to another city.</p>}

      <ul className="mt-6 space-y-3">
        {results?.map((b) => (
          <li key={b.id} className="flex flex-col gap-3 rounded-2xl border-b-2 border-brand bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">{b.name} <span className="ml-1 rounded-md bg-brand/10 px-2 py-0.5 text-xs text-brand-dark">{b.type}</span></p>
              <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1"><MapPin size={12} />{b.from} to {b.to}</span>
                <span className="inline-flex items-center gap-1"><Clock size={12} />{b.dep} · {b.hours}h</span>
                <span className="inline-flex items-center gap-1"><CalendarDays size={12} />{date}</span>
                <span>{b.seats} seats left</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-xl font-bold">৳{b.fare}</p>
              <button type="button" onClick={() => setSelected(b)} className="rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-slate-900 hover:brightness-95">Book now</button>
            </div>
          </li>
        ))}
      </ul>

      {selected && <Booking bus={selected} date={date} onClose={() => setSelected(null)} />}
    </section>
  );
}

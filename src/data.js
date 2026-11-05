import heroImg from "./assets/bus.jpg";
export { heroImg };

// [from, to, AC fare (BDT), hours]
export const routes = [
  ["Dhaka", "Chattogram", 750, 6],
  ["Dhaka", "Cox's Bazar", 1400, 9],
  ["Dhaka", "Sylhet", 800, 5.5],
  ["Dhaka", "Rajshahi", 750, 6],
  ["Dhaka", "Khulna", 800, 7],
  ["Dhaka", "Teknaf", 1600, 11],
  ["Chattogram", "Cox's Bazar", 600, 4],
  ["Cox's Bazar", "Teknaf", 350, 3],
];

export const cities = [...new Set(routes.flatMap((r) => [r[0], r[1]]))].sort();

const templates = [
  { name: "Shanti Paribahan", type: "AC", dep: "07:30 AM", f: 1, seats: 14 },
  { name: "Shanti Express", type: "Non-AC", dep: "01:00 PM", f: 0.6, seats: 22 },
  { name: "Shanti Night Coach", type: "AC", dep: "10:30 PM", f: 1.15, seats: 9 },
];

export function findBuses(from, to) {
  const r = routes.find(([a, b]) => (a === from && b === to) || (a === to && b === from));
  if (!r) return [];
  return templates.map((t, i) => ({
    ...t, id: `${from}-${to}-${i}`, from, to, hours: r[3],
    fare: Math.round((r[2] * t.f) / 10) * 10,
  }));
}

export const destinations = [
  { name: "St. Martin's Island", to: "Teknaf", blurb: "Coral shores. Take the bus to Teknaf, then the ferry.", grad: "from-cyan-500 to-blue-700" },
  { name: "Cox's Bazar", to: "Cox's Bazar", blurb: "The world's longest natural sea beach.", grad: "from-sky-500 to-teal-600" },
  { name: "Sylhet", to: "Sylhet", blurb: "Tea gardens, hills and waterfalls.", grad: "from-emerald-600 to-lime-700" },
  { name: "Khulna", to: "Khulna", blurb: "Gateway to the Sundarbans mangrove forest.", grad: "from-green-700 to-slate-800" },
];

import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Destinations from "./components/Destinations.jsx";
import Search from "./components/Search.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [search, setSearch] = useState({
    from: "Dhaka",
    to: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const pickDestination = (to) => {
    setSearch((s) => ({ ...s, to, from: s.from === to ? "Dhaka" : s.from }));
    document.getElementById("search")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-inter text-slate-900">
      <div className="wrap">
        <Navbar />
        <Hero />
      </div>
      <Destinations onPick={pickDestination} />
      <Search search={search} setSearch={setSearch} />
      <About />
      <Footer />
    </div>
  );
}

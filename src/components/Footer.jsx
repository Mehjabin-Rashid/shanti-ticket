export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 py-8">
      <div className="wrap flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <span className="font-raleway text-lg font-extrabold text-slate-900">Shanti-Ticket</span>
        <span>© {new Date().getFullYear()} Shanti-Ticket. All rights reserved.</span>
      </div>
    </footer>
  );
}

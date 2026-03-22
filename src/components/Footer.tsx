export function Footer() {
  return (
    <footer className="w-full bg-bgDark py-12 px-8 md:px-16 lg:px-24 border-t border-white/5">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center text-2xl font-bold tracking-wide select-none">
          <span className="text-accentCyan">DIGI</span>
          <span className="text-white">VERA</span>
        </div>
        <p className="text-textMuted text-sm font-body">
          © 2026 Digivera Technologies India Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>);

}
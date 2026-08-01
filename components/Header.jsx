import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-wider text-slate-900">
          GÖKRAF<span className="text-blue-600">.</span>
        </Link>

        {/* Menü Linkleri */}
        <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Ana Sayfa
          </Link>
          <Link href="#hakkimizda" className="hover:text-slate-900 transition-colors">
            Hakkımızda
          </Link>
          <Link href="#iletisim" className="hover:text-slate-900 transition-colors">
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
}

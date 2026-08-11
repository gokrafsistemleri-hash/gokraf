import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo ve Hareketli Raf İkonu */}
        <Link href="/" className="flex items-center gap-2.5 group">
          
          {/* SÜREKLİ DÖNEN / HAREKET EDEN MİNİK RAF MONTAJ İKONU */}
          <div className="relative w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center overflow-hidden shadow-sm border border-slate-700">
            {/* Arka Planda Dönen Dişli / Daire Efekti */}
            <div className="absolute inset-0 border border-dashed border-blue-500/50 rounded-full animate-[spin_8s_linear_infinite]"></div>
            
            {/* Hareketli Raf Parçaları (Kendi Kendine Yükselip-Inen ve Parlayan) */}
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {/* Sol & Sağ Dikme Ayaklar */}
              <path strokeLinecap="round" d="M6 3v18M18 3v18" className="text-slate-400" />
              
              {/* Üst Raf Travers (Sürekli Parlayan & Hafif Oynayan) */}
              <path
                strokeLinecap="round"
                d="M6 8h12"
                className="animate-[pulse_1.5s_infinite] text-blue-400"
              />
              
              {/* Orta Raf Travers (Aşağı Yukarı Yumuşak Süzülen) */}
              <path
                strokeLinecap="round"
                d="M6 13h12"
                className="animate-[bounce_2s_infinite] text-amber-400"
              />

              {/* Alt Raf Travers */}
              <path strokeLinecap="round" d="M6 18h12" className="text-blue-400" />
            </svg>
          </div>

          {/* Logo Yazısı */}
          <span className="text-2xl font-black tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
            GÖKRAF<span className="text-blue-600"></span>
          </span>
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

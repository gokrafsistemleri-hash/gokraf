import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Sol Kolon */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">GÖKRAF</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Müşteri memnuniyeti ve yüksek kalite anlayışıyla hizmetinizdeyiz.
            </p>
          </div>

          {/* Orta Kolon: İletişim */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3">İletişim</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-800">Telefon:</span>{' '}
                <a href="tel:+905000000000" className="hover:text-blue-600">+90 (5XX) XXX XX XX</a>
              </li>
              <li>
                <span className="font-semibold text-slate-800">E-Posta:</span>{' '}
                <a href="mailto:info@gokraf.com" className="hover:text-blue-600">info@gokraf.com</a>
              </li>
            </ul>
          </div>

          {/* Sağ Kolon: Sosyal Medya */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Sosyal Medya</h4>
            <div className="flex gap-4 text-sm font-semibold text-slate-600">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Telif & Alt Çizgi */}
        <div className="border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Gökraf. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

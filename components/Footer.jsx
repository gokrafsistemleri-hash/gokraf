import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              GÖKRAF<span className="text-blue-500">.</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Müşteri memnuniyeti ve yüksek kalite anlayışıyla hizmetinizdeyiz. Endüstriyel ve kurumsal raf çözümlerimizle alanlarınızı değerlendiriyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">İletişim</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-300">Telefon:</strong>{' '}
                <a href="tel:05416304440" className="hover:text-blue-400 transition-colors">
                  0541 630 44 40
                </a>
              </li>
              <li>
                <strong className="text-slate-300">E-Posta:</strong> info@gokraf.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Sosyal Medya & WhatsApp</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="https://wa.me/905416304440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-semibold"
              >
                💬 WhatsApp İletişim Hattı
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-500">
          © 2026 Gökraf. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

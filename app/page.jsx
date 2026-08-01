import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        {/* Slider / Görsel Alanı */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm h-[320px] sm:h-[420px] flex items-center justify-center p-8 text-center">
            <div className="max-w-2xl z-10">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                Gökraf Kalitesi ve Güvencesi
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Sizler için en iyi çözümleri sunuyor, müşteri memnuniyetini her zaman ön planda tutuyoruz.
              </p>
            </div>
            {/* Arka plan görseli koymak istersen public/banner.jpg ekleyip burayı kullanabilirsin */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
          </div>
        </section>

        {/* Hakkımızda / Açıklama Bölümü */}
        <section id="hakkimizda" className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
            Hakkımızda
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
            Gökraf olarak kaliteli hizmet anlayışımız ve uzman kadromuzla sektörde fark yaratıyoruz. 
            İhtiyacınıza en uygun çözümleri sunmak ve güvenilir bir alışveriş/hizmet deneyimi yaşatmak için buradayız.
          </p>

          {/* Öne Çıkan Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-bold text-slate-900 mb-1">Yüksek Kalite</h3>
              <p className="text-xs text-slate-500">Standartların üzerinde hizmet anlayışı.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-slate-900 mb-1">Müşteri Odaklı</h3>
              <p className="text-xs text-slate-500">Satış öncesi ve sonrası tam destek.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-slate-900 mb-1">Hızlı Çözüm</h3>
              <p className="text-xs text-slate-500">Zamanında ve güvenli teslimat.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

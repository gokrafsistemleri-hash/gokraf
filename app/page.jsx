'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Öne Çıkan 6 Model
const modeller = [
  { id: 1, baslik: 'Ağır Yük Depo Rafı', resim: '/images/model1.jpg', aciklama: 'Yüksek taşıma kapasiteli sanayi ve depo çözümü.' },
  { id: 2, baslik: 'Hafif & Orta Yük Rafı', resim: '/images/model2.jpg', aciklama: 'Arşiv, atölye ve küçük depolar için modüler yapı.' },
  { id: 3, baslik: 'Geçme Sistem Mağaza Rafı', resim: '/images/model3.jpg', aciklama: 'Perakende ve teşhir alanlarına özel şık tasarım.' },
  { id: 4, baslik: 'Cıvatasız Modüler Raf', resim: '/images/model4.jpg', aciklama: 'Aletsiz, pratik ve hızlı geçmeli kurulum.' },
  { id: 5, baslik: 'Çelik Arşiv Raf Sistemleri', resim: '/images/model5.jpg', aciklama: 'Ofis ve klasör depolamaya uygun dayanıklı gövde.' },
  { id: 6, baslik: 'Paslanmaz Metal Raf', resim: '/images/model6.jpg', aciklama: 'Nemli alanlar ve gıda depoları için hijyenik yapı.' },
];

// Slider Görselleri
const sliderGorseller = [
  { id: 1, resim: '/images/slide1.jpg', baslik: 'Gökraf Modüler Raf Sistemleri', altBaslik: 'Mekanınıza özel alan tasarruflu çözümler' },
  { id: 2, resim: '/images/slide2.jpg', baslik: 'Yüksek Mukavemetli Depo Rafları', altBaslik: 'Ağır yük standartlarına uygun çelik profiller' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Otomatik Slider Geçişi (4 Saniyede Bir)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderGorseller.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* SLIDER BÖLÜMÜ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm h-[300px] sm:h-[450px]">
            {sliderGorseller.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-8 text-center ${
                  index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Yükleyeceğin Görsel (Görsel yoksa koyu arka plan durur) */}
                <img
                  src={slide.resim}
                  alt={slide.baslik}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="max-w-3xl z-10">
                  <h1 className="text-2xl sm:text-4xl font-extrabold mb-3 tracking-tight drop-shadow-md">
                    {slide.baslik}
                  </h1>
                  <p className="text-sm sm:text-lg text-slate-200 drop-shadow">
                    {slide.altBaslik}
                  </p>
                </div>
              </div>
            ))}

            {/* Slider Noktaları */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {sliderGorseller.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeSlide ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* MODELLERİMİZ BÖLÜMÜ (6 MODEL) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Modellerimiz
            </h2>
            <p className="text-sm text-slate-500">
              Öne çıkan modüler ve yüksek kaliteli raf çözümlerimiz.
            </p>
          </div>

          {/* 6'lı Kart Izgarası */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modeller.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
              >
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center text-slate-400 font-medium text-xs">
                  <img
                    src={item.resim}
                    alt={item.baslik}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span>Görsel Yüklenecek (`{item.resim}`)</span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {item.baslik}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {item.aciklama}
                    </p>
                  </div>
                  <Link
                    href="#iletisim"
                    className="inline-block text-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2 px-4 rounded-xl transition-colors"
                  >
                    Detaylı Bilgi & Teklif
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Tüm Modellerimize Bak Butonu */}
          <div className="text-center mt-10">
            <Link
              href="/modeller"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-8 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              Tüm Modellerimize Bakın →
            </Link>
          </div>
        </section>

        {/* NEDEN GÖKRAF? BÖLÜMÜ */}
        <section id="hakkimizda" className="max-w-5xl mx-auto px-4 py-10 text-center border-t border-slate-200/60">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Neden Gökraf?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
            Depo, mağaza ve iş yerleriniz için alan tasarrufu sağlayan, modüler ve yüksek taşıma kapasiteli çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Kolay & Hızlı Montaj</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cıvatasız, birbirine geçen modüler yapısı sayesinde dakikalar içinde kurulum.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-slate-900 mb-2">Yüksek Mukavemet</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ağır yük standartlarına uygun statik hesaplamalı çelik profiller.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-bold text-slate-900 mb-2">Özel Ölçü Tasarım</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mekanınıza milimetrik uyum sağlayan projeye özel ölçülendirme.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

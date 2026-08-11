'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderGorseller, setSliderGorseller] = useState([]);
  const [modeller, setModeller] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  // Sanity Studio'dan Verileri Çekme
  useEffect(() => {
    async function verileriGetir() {
      try {
        const sliderData = await client.fetch(`*[_type == "slider"]`);
        const modelData = await client.fetch(`*[_type == "model"][0..5]`);

        setSliderGorseller(sliderData || []);
        setModeller(modelData || []);
      } catch (error) {
        console.error('Sanity veri çekme hatası:', error);
      } finally {
        setYukleniyor(false);
      }
    }

    verileriGetir();
  }, []);

  // Otomatik Slider Geçişi
  useEffect(() => {
    if (sliderGorseller.length === 0) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderGorseller.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderGorseller]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* SLIDER BÖLÜMÜ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-sm h-[320px] sm:h-[450px]">
            {yukleniyor ? (
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">
                Yükleniyor...
              </div>
            ) : sliderGorseller.length > 0 ? (
              sliderGorseller.map((slide, index) => (
                <div
                  key={slide._id || index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {slide.gorsel && (
                    <img
                      src={urlFor(slide.gorsel).url()}
                      alt={slide.baslik || 'Gökraf Slayt'}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {slide.baslik && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-10 pb-5 px-6">
                      <p className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-sm">
                        {slide.baslik}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs font-medium">
                Görsel bulunamadı. Paneldem ekleyebilirsiniz.
              </div>
            )}

            {/* Slider Noktaları */}
            {sliderGorseller.length > 1 && (
              <div className="absolute bottom-4 right-6 z-20 flex gap-2">
                {sliderGorseller.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeSlide ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* MODELLERİMİZ BÖLÜMÜ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              Modellerimiz
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {yukleniyor ? (
              <div className="col-span-full text-center py-8 text-slate-400 text-xs">
                Yükleniyor...
              </div>
            ) : modeller.length > 0 ? (
              modeller.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
                >
                  <div className="h-36 sm:h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center text-slate-400 font-medium text-xs">
                    {item.gorsel ? (
                      <img
                        src={urlFor(item.gorsel).url()}
                        alt={item.baslik}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span>Görsel Yok</span>
                    )}
                  </div>
                  <div className="p-3 sm:p-4 text-center border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                      {item.baslik}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-slate-500 text-xs font-medium">
                Henüz model eklenmedi.
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/modeller"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-lg shadow-sm transition-all"
            >
              Tüm Modellerimize Bakın →
            </Link>
          </div>
        </section>

        {/* NEDEN GÖKRAF? BÖLÜMÜ */}
        <section id="hakkimizda" className="max-w-5xl mx-auto px-4 py-10 text-center border-t border-slate-200/60">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Neden Gökraf?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-xs sm:text-sm leading-relaxed">
            Depo, mağaza ve iş yerleriniz için alan tasarrufu sağlayan, modüler ve yüksek taşıma kapasiteli çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Kolay & Hızlı Montaj</h3>
              <p className="text-xs text-slate-500">Cıvatasız, birbirine geçen modüler yapısı sayesinde dakikalar içinde kurulum.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Yüksek Mukavemet</h3>
              <p className="text-xs text-slate-500">Ağır yük standartlarına uygun statik hesaplamalı çelik profiller.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Özel Ölçü Tasarım</h3>
              <p className="text-xs text-slate-500">Mekanınıza milimetrik uyum sağlayan projeye özel ölçülendirme.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

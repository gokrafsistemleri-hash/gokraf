'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [montajAdim, setMontajAdim] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Hero / Başlık Alanı */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-md p-8 sm:p-12 text-center">
            <div className="max-w-3xl mx-auto z-10 relative">
              <span className="inline-block bg-blue-600/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30 backdrop-blur-sm">
                Endüstriyel & Kurumsal Raf Çözümleri
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                Gökraf Kalitesi ve Güvencesi
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Alanlarınıza en uygun, yüksek mukavemetli ve estetik raf sistemlerini tasarlıyor, kuruyor ve teslim ediyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* INTERAKTİF RAF MONTAJ SİMÜLASYONU */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Raf Montaj Sistemi (Sanal Simülasyon)
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Aşağıdaki adımlara tıklayarak modüler raf sistemimizin geçme montaj yapısını inceleyin.
            </p>

            {/* Adım Butonları */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { num: 1, label: '1. Taşıyıcı Dikmeler' },
                { num: 2, label: '2. Yatay Traversler' },
                { num: 3, label: '3. Raf Tablaları & Kilit' },
              ].map((item) => (
                <button
                  key={item.num}
                  onClick={() => setMontajAdim(item.num)}
                  className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                    montajAdim === item.num
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Animasyon Çizim Alanı */}
            <div className="relative h-72 w-full max-w-2xl mx-auto bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden shadow-inner">
              
              {/* Izgara Arka Plan Efekti */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>

              {/* 1. ADIM: Taşıyıcı Dikmeler (Sol & Sağ) */}
              <div
                className={`absolute left-1/4 h-52 w-5 bg-slate-400 rounded transition-all duration-500 border-r-2 border-slate-600 ${
                  montajAdim >= 1
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-12'
                }`}
              ></div>
              <div
                className={`absolute right-1/4 h-52 w-5 bg-slate-400 rounded transition-all duration-500 border-l-2 border-slate-600 ${
                  montajAdim >= 1
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-12'
                }`}
              ></div>

              {/* 2. ADIM: Traversler (Geçme Kollar) */}
              <div
                className={`absolute w-[48%] h-3 bg-blue-500 rounded transition-all duration-500 delay-75 shadow-lg ${
                  montajAdim >= 2
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0'
                }`}
                style={{ top: '35%' }}
              ></div>
              <div
                className={`absolute w-[48%] h-3 bg-blue-500 rounded transition-all duration-500 delay-150 shadow-lg ${
                  montajAdim >= 2
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0'
                }`}
                style={{ top: '65%' }}
              ></div>

              {/* 3. ADIM: Raf Tablaları (Ahşap / Çelik Paneller) */}
              <div
                className={`absolute w-[50%] h-3 bg-amber-500 rounded transition-all duration-500 shadow-md ${
                  montajAdim === 3
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-6'
                }`}
                style={{ top: '31%' }}
              ></div>
              <div
                className={`absolute w-[50%] h-3 bg-amber-500 rounded transition-all duration-500 delay-100 shadow-md ${
                  montajAdim === 3
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-6'
                }`}
                style={{ top: '61%' }}
              ></div>

              {/* Durum Bilgi Yazısı */}
              <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                {montajAdim === 1 && '▶ DİKME MONTAJI: Ana ayaklar yerleştirildi.'}
                {montajAdim === 2 && '▶ TRAVERS KİLİTLENMESİ: Yatay kollar sabitlendi.'}
                {montajAdim === 3 && '✔ TAMAMLANDI: Tablalar oturtuldu, sistem hazır.'}
              </div>
            </div>
          </div>
        </section>

        {/* Öne Çıkan Özellikler Kartları */}
        <section id="hakkimizda" className="max-w-5xl mx-auto px-4 py-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Neden Gökraf?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Depo, mağaza ve iş yerleriniz için alan tasarrufu sağlayan, modüler ve yüksek taşıma kapasiteli çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-blue-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-1">Kolay & Hızlı Montaj</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cıvatasız, birbirine geçen modüler yapısı sayesinde dakikalar içinde kurulum.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-blue-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-slate-900 mb-1">Yüksek Mukavemet</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ağır yük standartlarına uygun statik hesaplamalı çelik profiller.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-blue-200">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-bold text-slate-900 mb-1">Özel Ölçü Tasarım</h3>
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

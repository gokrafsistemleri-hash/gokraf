'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client, urlFor } from '@/lib/sanity';

const PER_PAGE = 12; // Sayfa başına 12 model

export default function ModellerPage() {
  const [modeller, setModeller] = useState([]);
  const [toplamModel, setToplamModel] = useState(0);
  const [sayfa, setSayfa] = useState(1);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function verileriGetir() {
      setYukleniyor(true);
      try {
        const baslangic = (sayfa - 1) * PER_PAGE;
        const bitis = sayfa * PER_PAGE;

        // Toplam sayıyı çek
        const count = await client.fetch(`count(*[_type == "model"])`);
        setToplamModel(count);

        // Sayfa başına en yeniden eskiye doğru 12 tane çek
        const modelData = await client.fetch(
          `*[_type == "model"] | order(_createdAt desc)[${baslangic}...${bitis}]`
        );
        setModeller(modelData || []);
      } catch (error) {
        console.error('Model çekme hatası:', error);
      } finally {
        setYukleniyor(false);
      }
    }

    verileriGetir();
  }, [sayfa]);

  const toplamSayfa = Math.ceil(toplamModel / PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Tüm Raf Modellerimiz
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Toplam {toplamModel} model içerisinden {sayfa}. sayfadasınız.
          </p>
        </div>

        {/* 12'li Model Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {yukleniyor ? (
            <div className="col-span-full text-center py-12 text-slate-400 text-xs">
              Modeller Yükleniyor...
            </div>
          ) : modeller.length > 0 ? (
            modeller.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md group cursor-pointer"
              >
                <div className="h-40 sm:h-52 bg-slate-100 relative overflow-hidden flex items-center justify-center text-slate-400 font-medium text-xs">
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
                  <h2 className="font-bold text-slate-800 text-xs sm:text-sm">
                    {item.baslik}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 text-xs font-medium">
              Henüz model eklenmedi.
            </div>
          )}
        </div>

        {/* Sayfalama (Pagination) Butonları */}
        {toplamSayfa > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={() => setSayfa((p) => Math.max(p - 1, 1))}
              disabled={sayfa === 1}
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Önceki Sayfa
            </button>

            <span className="text-xs font-bold text-slate-600 px-2">
              {sayfa} / {toplamSayfa}
            </span>

            <button
              onClick={() => setSayfa((p) => Math.min(p + 1, toplamSayfa))}
              disabled={sayfa === toplamSayfa}
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Sonraki Sayfa →
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

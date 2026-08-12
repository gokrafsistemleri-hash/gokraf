'use client';
import { useState, useEffect, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';

export default function ModelDetayPage({ params }) {
  const resolvedParams = use(params);
  const [model, setModel] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    async function modelGetir() {
      try {
        const data = await client.fetch(
          `*[_type == "model" && _id == $id][0]`,
          { id: resolvedParams.id }
        );
        setModel(data);
      } catch (error) {
        console.error('Model getirme hatası:', error);
      } finally {
        setYukleniyor(false);
      }
    }

    if (resolvedParams?.id) {
      modelGetir();
    }
  }, [resolvedParams.id]);

  if (yukleniyor) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow flex items-center justify-center text-slate-400 text-xs">
          Model Detayı Yükleniyor...
        </main>
        <Footer />
      </div>
    );
  }

  if (!model) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center text-slate-600 gap-4">
          <p className="text-sm font-semibold">Model bulunamadı veya silinmiş olabilir.</p>
          <Link
            href="/modeller"
            className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            ← Tüm Modellere Dön
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappMesaj = encodeURIComponent(
    `Merhaba, Gökraf web sitenizden "${model.baslik}" modeli hakkında bilgi ve fiyat teklifi almak istiyorum.`
  );
  const whatsappUrl = `https://wa.me/905416304440?text=${whatsappMesaj}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="mb-6">
          <Link
            href="/modeller"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            ← Tüm Modellerimize Dön
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-slate-100 relative min-h-[280px] sm:min-h-[400px] flex items-center justify-center">
            {model.gorsel ? (
              <img
                src={urlFor(model.gorsel).url()}
                alt={model.baslik}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-slate-400 text-xs">Görsel Yüklenmemiş</span>
            )}
          </div>

          <div className="p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md mb-3">
                Gökraf Raf Sistemleri
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                {model.baslik}
              </h1>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 mb-8">
                {model.aciklama ? (
                  <p className="whitespace-pre-line">{model.aciklama}</p>
                ) : (
                  <p className="italic text-slate-400">
                    Bu model için detaylı açıklama girilmemiş. Detaylar ve özel ölçülendirme için bizimle iletişime geçebilirsiniz.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-sm transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp'tan Detay & Fiyat Al
              </a>

              <a
                href="tel:05416304440"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-xl transition-colors"
              >
                📞 Hemen Ara: 0541 630 44 40
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

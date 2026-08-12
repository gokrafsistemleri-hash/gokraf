'use client';
import { use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { sehirlerData, metniFormatla } from '@/lib/sehirler';

export default function SehirSeoPage({ params }) {
  const resolvedParams = use(params);
  const ilSlug = resolvedParams.il;
  const ilceSlug = resolvedParams.ilce ? resolvedParams.ilce[0] : null;

  // Şehir verisini çek
  const sehir = sehirlerData.find((s) => s.slug === ilSlug) || {
    isim: metniFormatla(ilSlug),
    ilceler: [],
    sanayiBolgeleri: [],
  };

  const ilceIsim = ilceSlug ? metniFormatla(ilceSlug) : null;
  const lokasyonBaslik = ilceIsim
    ? `${sehir.isim} ${ilceIsim}`
    : sehir.isim;

  // Özel WhatsApp Mesaj Şablonu (0541 630 44 40)
  const whatsappMesaj = encodeURIComponent(
    `Merhaba, Gökraf web sitenizden ulaştım. ${lokasyonBaslik} bölgesindeki depomuz/işletmemiz için özel ölçü raf fiyat teklifi almak istiyorum.`
  );
  const whatsappUrl = `https://wa.me/905416304440?text=${whatsappMesaj}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* ÜST BİLGİ VE VURGULU PARAGRAF */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center mb-8">
          <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full mb-4">
            🚚 TÜM TÜRKİYE'YE KALİTELİ VE UYGUN FİYATLI RAF GÖNDERİMİ & HIZLI TESLİMAT
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            {lokasyonBaslik} Depo & Mağaza Raf Sistemleri
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            <strong>{lokasyonBaslik}</strong> bölgesindeki tüm depo, fabrika, iş yeri ve mağazalar için yüksek yük taşıma kapasiteli, modüler, cıvatasız ve kaliteli çelik raf sistemlerini imalattan en uygun fiyatlarla sunuyoruz. Özel ölçülendirme ve projelendirme desteğimizle Türkiye'nin 81 iline ambar ve kargo ile hızlı gönderim yapıyoruz.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-xl mx-auto mb-2">
            <p className="text-xs sm:text-sm font-bold text-slate-800 mb-3">
              İletişim ve Anında Özel Fiyat Teklifi Almak İçin Yazın:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-sm hover:scale-[1.02]"
              >
                💬 WhatsApp ile Fiyat Teklifi Al
              </a>
              <a
                href="tel:05416304440"
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl transition-colors"
              >
                📞 0541 630 44 40
              </a>
            </div>
          </div>
        </div>

        {/* SANAYİ BÖLGELERİ VE İLÇELER (SEO BÖLÜMÜ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sanayi Bölgeleri & OSB'ler */}
          {sehir.sanayiBolgeleri && sehir.sanayiBolgeleri.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                🏭 {sehir.isim} Öne Çıkan OSB & Sanayi Bölgeleri
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {sehir.sanayiBolgeleri.map((sb, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="font-medium text-slate-800">{sb}</span> Depo & Mağaza Rafları
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* İlçeler */}
          {sehir.ilceler && sehir.ilceler.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                📍 {sehir.isim} Hizmet Verdiğimiz Tüm İlçeler
              </h3>
              <div className="flex flex-wrap gap-1.5 max-h-[220px] overflow-y-auto pr-1">
                {sehir.ilceler.map((ilce) => (
                  <Link
                    key={ilce}
                    href={`/raf-sistemleri/${sehir.slug}/${ilce}`}
                    className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-600 px-2.5 py-1 rounded-md text-slate-700 font-medium transition-colors"
                  >
                    {sehir.isim} {metniFormatla(ilce)}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

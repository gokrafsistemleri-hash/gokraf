import './globals.css';

export const metadata = {
  title: 'Kaliteli & Ucuz Raf Fiyatları | Gökraf Depo Raf Sistemleri',
  description:
    "Bütçenize uygun, kaliteli ağır ve hafif yük raf sistemleri Gökraf'ta! Tüm Türkiye'ye ambar ve kargo ile teslimat. Uygun raf fiyatları ve hızlı teklif için tıklayın.",
  keywords: [
    'ucuz raf fiyatları',
    'kaliteli depo rafı',
    'uygun fiyatlı raf sistemleri',
    'tüm türkiyeye raf gönderimi',
    'imalattan raf fiyatları',
    'çelik raf fiyatları',
    '81 ile kargo raf',
    'ağır yük rafı fiyatları',
    'gökraf raf',
    'gökraf raf sistemleri',
  ],
  authors: [{ name: 'Gökraf' }],
  openGraph: {
    title: 'Kaliteli & Ucuz Raf Fiyatları | Gökraf Depo Raf Sistemleri',
    description:
      "Bütçenize uygun, kaliteli ağır ve hafif yük raf sistemleri Gökraf'ta! Tüm Türkiye'ye ambar ve kargo ile teslimat.",
    url: 'https://gokraf.com',
    siteName: 'Gökraf Raf Sistemleri',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaliteli & Ucuz Raf Fiyatları | Gökraf Depo Raf Sistemleri',
    description:
      "Bütçenize uygun, kaliteli ağır ve hafif yük raf sistemleri Gökraf'ta! Tüm Türkiye'ye ambar ve kargo ile teslimat.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}

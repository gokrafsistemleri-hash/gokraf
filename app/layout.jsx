import './globals.css';

export const metadata = {
  title: 'Kaliteli & Ucuz Raf Fiyatları | Gökraf Depo Raf Sistemleri',
  description:
    "Bütçenize uygun, kaliteli ağır ve hafif yük raf sistemleri Gökraf'ta! Tüm Türkiye'ye ambar ve kargo ile teslimat. Uygun raf fiyatları ve hızlı teklif için tıklayın.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="110" fill="%230f172a"/><path d="M120 160h272M120 256h272M120 352h272" stroke="%233b82f6" stroke-width="36" stroke-linecap="round"/><path d="M150 110v292M362 110v292" stroke="%23f97316" stroke-width="32" stroke-linecap="round"/><circle cx="256" cy="160" r="22" fill="%2338bdf8"/><circle cx="256" cy="256" r="22" fill="%2338bdf8"/><circle cx="256" cy="352" r="22" fill="%2338bdf8"/></svg>',
  },
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

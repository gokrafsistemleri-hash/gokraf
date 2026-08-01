export const metadata = {
  title: 'Gökraf | Kalite ve Güvenin Adresi',
  description: 'Gökraf resmi web sitesi. Ürün ve hizmetlerimiz hakkında detaylı bilgi alın.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Tailwind CSS CDN Import */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-slate-200">
        {children}
      </body>
    </html>
  );
}

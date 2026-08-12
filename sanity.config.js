import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Gökraf Yönetim Paneli',

  projectId: 'wov9e2cs', // Sanity Project ID
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: [
      // 1. Sadece Ana Sayfa Slide Görselleri
      {
        name: 'slider',
        title: 'Slider Görselleri',
        type: 'document',
        fields: [
          { name: 'baslik', title: 'Slayt Başlığı', type: 'string' },
          { name: 'gorsel', title: 'Slayt Görseli', type: 'image', options: { hotspot: true } },
        ],
      },
      // 2. Sadece Raf Modellerimiz Kartları
      {
        name: 'model',
        title: 'Raf Modelleri',
        type: 'document',
        fields: [
          { name: 'baslik', title: 'Model Adı', type: 'string' },
          { name: 'gorsel', title: 'Model Görseli', type: 'image', options: { hotspot: true } },
          { name: 'aciklama', title: 'Açıklama', type: 'text' },
        ],
      },
    ],
  },
});

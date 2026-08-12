import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Gökraf Yönetim Paneli',

  projectId: 'wov9e2cs', // Kendi Project ID'ni koru
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: [
      {
        name: 'slider',
        title: 'Slider Görselleri',
        type: 'document',
        fields: [
          { name: 'baslik', title: 'Slayt Başlığı', type: 'string' },
          { name: 'gorsel', title: 'Slayt Görseli', type: 'image', options: { hotspot: true } },
        ],
      },
      {
        name: 'model',
        title: 'Raf Modelleri',
        type: 'document',
        fields: [
          { name: 'baslik', title: 'Model Adı', type: 'string' },
          {
            name: 'slug',
            title: 'SEO URL (Slug)',
            type: 'slug',
            options: {
              source: 'baslik', // Başlıktan otomatik üretir
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          { name: 'gorsel', title: 'Model Görseli', type: 'image', options: { hotspot: true } },
          { name: 'aciklama', title: 'Açıklama', type: 'text' },
        ],
      },
    ],
  },
});

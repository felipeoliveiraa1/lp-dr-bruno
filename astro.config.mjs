import { defineConfig } from 'astro/config';

export default defineConfig({
  // troque pelo domínio final quando publicar na Vercel
  site: 'https://clinic-perfect-face.vercel.app',
  build: { inlineStylesheets: 'auto' },
});

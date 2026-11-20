// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// If you deploy to a repo named <username>.github.io, keep `base` unset.
// If you deploy to a repo with another name (e.g. "portfolio"), set base: '/portfolio'.
export default defineConfig({
  site: 'https://aryan-agarwal1108.github.io',
  integrations: [mdx(), sitemap()],
  // Experience was merged into the Resume page
  redirects: { '/experience': '/resume' },
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});

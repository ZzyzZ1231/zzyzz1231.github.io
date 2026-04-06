import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ZzyzZ1231.github.io',
  integrations: [mdx(), tailwind()]
});

// https://zzyzz1231.github.io/capstone_website
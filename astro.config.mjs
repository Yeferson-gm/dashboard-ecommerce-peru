// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['vue-router']
    }
  },
});

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/eslint",
    "nuxt-lucide-icons",
  ],
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
});
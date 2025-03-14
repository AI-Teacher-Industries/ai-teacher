import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src/",
  compatibilityDate: "2024-11-01",

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },

  devServer: {
    port: 3002,
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@vueuse/nuxt"],
});
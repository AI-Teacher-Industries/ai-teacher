import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  rootDir: "./src",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 3002,
  },
  css: ["~/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});

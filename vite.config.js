import { defineConfig } from "vite";

export default defineConfig({
  base: "/Proyecto-Spa/",
  root: "./",
  publicDir: "public",
  server: {
    port: 3000,
    open: true,
  },
});

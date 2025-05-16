import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "http://localhost:4321",
  vite: {
    plugins: [tailwind()],
  },
});

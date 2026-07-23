// Habilita o suporte ao React durante o desenvolvimento e a geração final.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/devclub-concurso/",
});

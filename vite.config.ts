import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  plugins: [remix()],
    optimizeDeps: {
      include: ['react-redux', '@redux/toolkit','react-router/dom'],
    },
   resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
      "@": path.resolve(__dirname, "./public"),
    }
  }
});
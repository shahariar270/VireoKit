import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Library build: emits ESM JS to dist/ with peers left external.
// Styles are compiled separately (see the "build:css" script) to dist/style.css.
export default defineConfig({
  plugins: [react()],
  // don't copy the app's public/ assets into the library dist
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-router-dom",
        "prop-types",
      ],
    },
    // styles ship as a standalone file, not injected by the JS
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});

// import { defineConfig } from "vite";

// export default defineConfig({
//   build: {
//     outDir: "dist",
//     rollupOptions: {
//       input: "src/main.js",
//       output: {
//         entryFileNames: "bundle.js",
//       },
//     },
//     minify: false,
//   },
// });

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/main.js",
      output: {
        entryFileNames: "bundle.js",
        assetFileNames: "bundle.css", // rename emitted CSS
      },
    },
    minify: true,
    cssCodeSplit: true, // ensure separate CSS file
  },
});

// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  server: {
    port: 5175,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tailwindcss(),
    // Enables Vite to resolve imports using path aliases.
    tsconfigPaths(),
    tanstackStart({
      srcDirectory: "src", // This is the default
      router: {
        // Specifies the directory TanStack Router uses for your routes.
        routesDirectory: "app", // Defaults to "routes", relative to srcDirectory
      },
    }),

    viteReact(),
  ],
});

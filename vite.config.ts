import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import sass from "sass";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    cssMinify: true,
    ssr: false,
}});

import { defineConfig } from "vite";
import { createVuePlugin as Vue2 } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [Vue2({ jsx: true })],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    deps: {
      inline: ["vuetify"],
    },
    clearMocks: true,
  },
});

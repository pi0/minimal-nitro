import { defineConfig } from "nitro"

export default defineConfig({
  serverDir: './server',
  minify: true,
  inlineDynamicImports: true,
  preset: "standard"
});

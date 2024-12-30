import { defineConfig } from 'tsup'
import { extractWasmPlugin } from './plugins/extractWasm'

export default defineConfig({
  entry: ['src/opencv.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  outExtension(ctx) {
    return {
      js: ctx.format === 'cjs' ? '.bundle.js' : '.bundle.mjs',
    }
  },
  esbuildPlugins: [extractWasmPlugin()]
})
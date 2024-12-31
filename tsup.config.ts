import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      'index': 'src/opencv.ts',
    },
    outDir: 'dist',
    format: ['cjs', 'esm'],
  },
  {
    entry: {
      'index': 'src/opencv.ts',
    },
    outDir: 'dist',
    format: ['cjs', 'esm'],
    define: {
      'require': 'undefined',
      'process': 'undefined',
    },
    platform: 'browser',
    treeshake: true,
    outExtension(ctx) {
      return {
        js: ctx.format === 'esm' ? '.web.mjs' : '.web.js',
      }
    },
  },
])
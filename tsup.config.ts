import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/opencv.ts',
  },
  outDir: 'dist',
  format: ['cjs', 'esm'],
})
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/node.ts', 'src/vite/index.ts', 'src/jsx-runtime.ts', 'src/cli/bin.ts'],
  format: 'esm',
  dts: true,
  clean: true,
  sourcemap: true,
})

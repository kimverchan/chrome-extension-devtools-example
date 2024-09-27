import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['src/*.ts'],
  esbuildOptions(options) {
    if (options.format === 'iife') options.outExtension = { '.js': '.js' }
  },
  define: {
    'process.env': JSON.stringify(process.env),
  },
  clean: true,
  format: ['iife'],
  minify: true,
})

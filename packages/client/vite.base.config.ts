import { join, resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default {
  resolve: {
    alias: {
      '~/': `${resolve(__dirname)}/src/`,
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  plugins: [
    {
      name: 'local-object-transform',
      transform: {
        order: 'post',
        async handler(code) {
          return `${code}\n/* Injected with object hook! */`
        },
      },
    },
    Vue(),
    AutoImport({
      dirs: ['./src/utils', './src/composables', './src/constants'],
      dts: join(__dirname, 'auto-imports.d.ts'),
      imports: ['vue'],
    }),
  ],
}

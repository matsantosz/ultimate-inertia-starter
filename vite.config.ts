import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/app.ts',
      ssr: 'resources/ssr.ts',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          from: '@inertiajs/vue3',
          imports: ['useForm', 'usePage', 'useRemember'],
        },
      ],
      dts: 'resources/types/auto-imports.d.ts',
    }),
    Components({
      dirs: ['resources/components'],
      dts: 'resources/types/components.d.ts',
      resolvers: [
        (name) => {
          switch (name) {
            case 'Link':
              return {
                name: 'Link',
                from: '@inertiajs/vue3',
              }
            case 'Head':
              return {
                name: 'Head',
                from: '@inertiajs/vue3',
              }
          }
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources'),
    },
  },
  ssr: {
    noExternal: true,
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(),
  VitePWA(
    {
      registerType: 'autoUpdate',
      manifest: {
        name: 'E-Commerce Shopping App',
        short_name: 'E-Commerce',
        description: 'A simple e-commerce shopping app built with React and Vite',
        theme_color: '#3182CE',
        background_color: '#F5F5F5',
        display: 'standalone',
        start_url: '/ecommerce/',

        icons: [

          {
            src: '/icon_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {

            src: '/icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },


        ],
      },
      workbox: {
        runtimeCaching: [
          {
            // https://suriya2023.github.io/ecommerce/homeLeaving
            urlPattern: /^https:\/\/suriya2023\.github\.io\/ecommerce\/.*/,
            handler: 'networkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 24 hours
              },
            },
          },
        ],
      },

    },
  )
  ],
  base: '/ecommerce/', // Replace 'your-repo-name' with your GitHub repository name
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 目标 API 服务器地址
        changeOrigin: true, // 是否更改请求源
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      },
    },
  },
})

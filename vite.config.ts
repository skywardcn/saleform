import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        dir: "dist",
        entryFileNames: "index.js"
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "./src"),
      "features": path.resolve(__dirname, "./src/features"),
    }
  }
}
)

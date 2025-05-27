import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
   base: process.env.NODE_ENV === 'production' 
    ? '/Todolist-with-RTK_sprint_5/' 
    : '/',
})

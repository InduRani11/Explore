import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import withMT from '@material-tailwind/react/utils/withMT'
// import { MaterialTailwindTheme } from '@material-tailwind/react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

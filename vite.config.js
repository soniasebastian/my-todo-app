import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
},
{
  name: 'vite-plugin-css-modules',
  generateScopedName: '[local]__[hash:base64:5]', // Adjust as needed
},)

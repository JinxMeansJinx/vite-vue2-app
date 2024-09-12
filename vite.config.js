import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import requireTransform from 'vite-plugin-require'
// https://vitejs.dev/config/
export default defineConfig(()=>{
  return {
    plugins: [vue(),requireTransform()],
    base: '/',
    resolve:{
      alias:{
        '@': '/src'
      }
    }
  }
})

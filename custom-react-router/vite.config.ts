import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wanted-pre-onboarding-challenge-fe-3/custom-react-router/',  // yarn dev등 로컬에서는 주석처리
  plugins: [react()]
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function pagesBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo || repo.endsWith('.github.io')) return '/'
  return `/${repo}/`
}

// En GitHub Actions el sitio queda en /nombre-del-repo/. En local sigue en /.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? pagesBase() : '/',
  plugins: [react()],
})

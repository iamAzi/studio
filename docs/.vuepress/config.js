const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  lang: 'zh-CN',
  title: 'Azi Studio',
  description: '',
  base: '',
  dest: './dist',
  bundler: viteBundler({
    viteOptions: {
      base: './',
      build: {
        assetsDir: 'studio-assets'
      }
    }
  })
}
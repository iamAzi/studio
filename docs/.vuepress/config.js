const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
  lang: 'zh-CN',
  title: 'Azi Studio',
  description: '',
  base: '',
  bundler: viteBundler({
    viteOptions: {
      base: './'
    }
  })
}
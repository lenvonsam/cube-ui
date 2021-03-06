// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hljs from './common/js/highlight'

// TODO 需要使用 vConsole 的同学请打开注释即可
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

import './common/stylus/index.styl'
import 'highlight.js/styles/solarized-dark.css'
import './common/js/directive.js'

hljs.initHighlightingOnLoad()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

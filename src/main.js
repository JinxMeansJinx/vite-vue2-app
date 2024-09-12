import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.scss'
Vue.use(ElementUI);

Vue.config.productionTip = false
 new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
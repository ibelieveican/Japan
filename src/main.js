import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//公共样式
import '@/assets/css/base.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

}).$mount('#app')

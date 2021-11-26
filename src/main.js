import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
Vue.config.productionTip = false
// 添加事件总线事件
// Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

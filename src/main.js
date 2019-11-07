import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './vuex/store'

// import './unit/const'
// import './control'
// import { subscribeRecord } from './unit'
// subscribeRecord(store)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
  // store: store
}).$mount('#app')

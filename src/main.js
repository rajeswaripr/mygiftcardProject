import Vue from 'vue'
import App from './App.vue'
import Routes from './Routs/routs'
import VueRouter from "vue-router";
import axios from "axios";


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.$http = axios

const comproutes = new VueRouter({
  routes:Routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:comproutes
}).$mount('#app')

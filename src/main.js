import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store';




// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);



Vue.config.productionTip = false;

new Vue({
  store,
  VueRouter,
  router,
  render: h => h(App)
}).$mount("#app");

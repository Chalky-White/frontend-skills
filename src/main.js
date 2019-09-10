import Vue from "vue";
import App from "./App.vue";
import Home from "./views/home/home.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App, Home)
}).$mount("#app");

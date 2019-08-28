import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home.vue";
import Algo from "./views/algo/algo.vue";
import Conception from "./views/conception/conception.vue";
import Css from "./views/css/css.vue";
import Html from "./views/html/html.vue";
import Javascript from "./views/javascript/javascript.vue";
import Vuejs from "./views/vuejs/vuejs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/algo",
      name: "Algo",
      component: Algo
      // redirect: { name: "children" },
      // children: [
      //   {
      //     path: "children",
      //     name: "home",
      //     component: Home
      //   }
      // ]
    },
    {
      path: "/conception",
      name: "Conception",
      component: Conception
    },
    {
      path: "/css",
      name: "Css",
      component: Css
    },
    {
      path: "/html",
      name: "Html",
      component: Html
    },
    {
      path: "/javascript",
      name: "Javascript",
      component: Javascript
    },
    {
      path: "/vuejs ",
      name: "Vuejs",
      component: Vuejs
    }
  ]
});

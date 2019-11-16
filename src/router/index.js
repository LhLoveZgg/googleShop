import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";
import about from "@/pages/about";
import contact from "@/pages/contact";
import news from "@/pages/news";

import layout from "@/layout";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      alias: '/',
      component: index  
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/products",
      name: "products",
      redirect: "/products/list",
      component: layout,
      children: [
        {
          name: "productsList",
          path: "/products/list/:id?",
          component: () => import("@/pages/product")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/pages/notFound.vue")
    }
  ]
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "./assets/style/reset.css";
import "./assets/style/border.css";
import "./assets/style/font-awesome.css"
import router from './router'
import "./assets/style/font-awesome.css";
import "@/fonts/style.css";
import store from "./store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

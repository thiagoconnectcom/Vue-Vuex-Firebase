import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import lodash from "lodash";
import VueLodash from "vue-lodash";

Vue.use(VueLodash, lodash);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router";

import store from "./store";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

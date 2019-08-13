import Vue from "vue";
import Router from "vue-router";
// import firebase from "firebase";
import Login from "./pages/Login/index.vue";
import Cadastrar from "./pages/Login/cadastro";
import Home from "./pages/Home";
import Error from "./pages/Error";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    // User
    {
      path: "/",
      component: Login
    },
    {
      path: "/home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/cadastrar",
      component: Cadastrar
    },
    // 404
    {
      path: "/erro",
      component: Error,
      meta: {
        title: "Ops! Error 404"
      }
    },
    {
      path: "*",
      component: Error
    }
  ]
});

export default router;

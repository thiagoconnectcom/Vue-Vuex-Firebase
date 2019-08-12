import Vue from "vue";
import Router from "vue-router";
// import firebase from "firebase";

import Login from "./pages/Login/index.vue";
import Cadastrar from "./pages/Login/cadastro.vue";
import Home from "./pages/Home";

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

// router.beforeEach((to, from, next) => {
//   //check fro requireAuth guard
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!firebase.auth().currentUser) {
//       next({
//         path: "/",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       next();
//     }
//   }
// });

export default router;

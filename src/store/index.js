import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import firebase from "../data/firebase";

Vue.use(Vuex);
Vue.use(firebase);

const debug = true;

export default new Vuex.Store({
  modules: {
    auth
  },
  strict: debug,

  state: {
    tarefas: {}
  },

  mutations: {
    settarefas(state, payload) {
      state.tarefas = payload;
    }
  }
});

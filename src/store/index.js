import Vue from "vue";
import Vuex from "vuex";
import firebase from "../data/firebase";

Vue.use(Vuex);
Vue.use(firebase);

const debug = true;

export default new Vuex.Store({
 
  strict: debug,

  state: {
    tarefas: {},
    
  },

  mutations: {
    settarefas(state, payload) {
      state.tarefas = payload;
    }
    
  }
});

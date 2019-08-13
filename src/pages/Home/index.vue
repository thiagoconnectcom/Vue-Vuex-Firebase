<template>
  <div>
    <Header />
    <div class="container">
      <h1 class="mt-5 mb-5 text-center">TO-DO LIST</h1>

      <div class="row">
        <div class="col-md-6">
          <form @submit.prevent="writeUserData()">
            <div class="col-md-4 mt-2 mb-2">
              <input v-model="prioridade" class="p-2 input" type="text" />
            </div>
            <div class="col-md-12 mt-2 mb-2">
              <input v-model="title" class="p-2 input" type="text" />
            </div>
            <div class="col-md-12 mt-2 mb-2">
              <textarea rows="6" v-model="description" class="p-2 input" type="text" />
            </div>
            <div class="col-md-12 mt-2 mb-2">
              <input v-model="data" class="p-2 input" type="date" />
            </div>
            <div class="col-md-12 mt-4 mb-2 text-center">
              <button class="btn btn-success" type="submit">Adicionar Novo Registro</button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <!--Caso o objeto esteja vazio-->
          <PageNull v-if="this.$store.state.tarefas == null " />

          <!--Card de Tarefas-->
          <Card :list-tarefas="this.$store.state.tarefas" />
        </div>
      </div>
    </div>
    <pre>{{this.$store.state.tarefas}}</pre>
  </div>
</template>

<script>
import firebase, { database } from "firebase";
import Header from "../../components/Header";
import PageNull from "../../components/PageNull";
import Card from "../../components/Card";
import axios from "axios";
import moment from "vue-moment";

export default {
  name: "Home",
  components: {
    Header,
    PageNull,
    Card
  },
  data() {
    return {
      title: "",
      prioridade: "",
      description: "",
      data: ""
    };
  },

  watch: {
    data: function(val) {}
  },

  mounted: function() {
    const that = this;
    axios({
      method: "get",
      url: "https://evox-1d3da.firebaseio.com/tarefa.json"
    })
      .then(function(response) {
        const res = response.data;

        // res.map(key, valor) {
        //   if (key == 'data') {
        //     if (value > new Date()) {
        //       console.log("TAREFA VENCIDA"):
        //     }
        //   }
        // });

        that.$store.commit("settarefas", res);
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  methods: {
    writeUserData() {
      const that = this;

      // let currentdata = new Date();
      // let comparedata = this.data;

      // if (currentdata > comparedata) {
      //   console.log('ESSA DATA JA PASSOU');
      // }

      // console.log(currentdata, comparedata);

      // return;
      firebase
        .database()
        .ref("tarefa/")
        .push(
          {
            title: this.title,
            prioridade: this.prioridade,
            description: this.description,
            data: this.data
          },

          function(error) {
            if (error) {
              alert("Error !!!");
            } else {
              axios({
                method: "get",
                url: "https://evox-1d3da.firebaseio.com/tarefa.json"
              })
                .then(function(response) {
                  const res = response.data;
                  that.$store.commit("settarefas", res);
                })
                .catch(err => {
                  console.log(err.message);
                });
            }
          }
        );
      this.title = "";
      this.description = "";
      this.data = "";
      this.prioridade = "";
    }
  }
};
</script>

<style>
.input {
  width: 100%;
  border: 1px solid #eee;
}
.card {
  background-image: linear-gradient(to bottom, #0041c2, #055df9);
  color: #fff;
  font-weight: bold;
}
</style>
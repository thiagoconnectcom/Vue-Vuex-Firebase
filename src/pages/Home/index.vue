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
          <div v-if="tarefa == null ">
            <p class="text-center mb-0" style="font-size: 10rem; font-weight: 900;">0!</p>
            <p
              class="text-center"
              style="font-size: 2rem;"
            >Esse é o numero de resultados encontrados!</p>
          </div>
          <!--Card de Tarefas-->
          <div class="card mt-1 mb-4" v-for="(itens, idx) in tarefa" :key="idx">
            <div class="p-2">
              <pre>{{remover}}</pre>
              <input type="checkbox" v-on:click="remove(idx)" />
              <span class="pl-2">{{itens.prioridade}}</span>
              <span class="pl-2">{{itens.title}}</span>

              <span class="float-right">{{itens.data}}</span>
            </div>
            <div class="p-2">
              <span class="pl-2">{{itens.description}}</span>
            </div>
          </div>
          <pre>{{data}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { database } from "firebase";
import Header from "../../components/Header";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      title: "",
      prioridade: "",
      description: "",
      tarefa: {},
      data: "",
      remover: false
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

        that.tarefa = res;
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  methods: {
    writeUserData() {
      const that = this;
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
                  that.tarefa = res;
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
    },

    remove(id) {
      const that = this;
      firebase
        .database()
        .ref("tarefa/" + id)
        .remove(function(error) {
          if (error) {
            alert("Error !!!");
          } else {
            axios({
              method: "get",
              url: "https://evox-1d3da.firebaseio.com/tarefa.json"
            })
              .then(function(response) {
                const res = response.data;
                that.tarefa = res;
              })
              .catch(err => {
                console.log(err.message);
              });
          }
        });
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
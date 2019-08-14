<template>
  <div>
    <div class="card mt-1 mb-4" v-for="(itens, idx) in orderedUsers" :key="idx">
      <div :class="{'red': items.indexOf(idx) >= 0 }">
        <div class="p-2">
          <input type="checkbox" @click="remove(idx)" />

          <span class="pl-2">{{itens.prioridade}}</span>
          <span class="pl-2">{{itens.title}}</span>

          <span class="float-right">{{itens.data}}</span>
        </div>
        <div class="p-2">
          <span class="pl-2">{{itens.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase, { database } from "firebase";
import axios from "axios";
export default {
  name: "Card",
  data: function() {
    return {
      color: false,
      items: []
    };
  },
  props: {
    listTarefas: Object
  },

  computed: {
    orderedUsers: function() {
      return _.orderBy(this.listTarefas, "prioridade", "desc");
    }
  },
  methods: {
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
                that.$store.commit("settarefas", res);
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
.red {
  background-color: red !important;
}
</style>
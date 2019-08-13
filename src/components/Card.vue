<template>
  <div>
    <div class="card mt-1 mb-4" v-for="(itens, idx) in orderedUsers" :key="idx">

      <div :class="{'red': items.indexOf(idx) >= 0 }">
        <div class="p-2">
          <input type="checkbox" @click="changecolor(idx)" />
          <!-- <pre>{{idx}}</pre> -->
          <span class="pl-2">{{itens.prioridade}}</span>
          <span class="pl-2">{{itens.title}}</span>

          <span class="float-right">{{itens.data}}</span>
        </div>
        <div class="p-2">
          <span class="pl-2">{{itens.description}}</span>
        </div>
      </div>
    </div>

   {{color}}
  </div>
</template>


<script>
import firebase, { database } from "firebase";
export default {
  name: "Card",
  data: function () {
    return {
      color: false,
     items:[]
    }
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
    changecolor: function (idx) {
      let that = this;
      
      let indice = this.items.indexOf(idx)
       
      if (indice >= 0) {
         that.$store.commit("setdelete", indice);
        this.items.splice(indice);
      
      }
      else {
        this.items.push(idx);
        
      }
    }
  }
};
</script>

<style>

.red {
  background-color: red !important;
}

 
</style>
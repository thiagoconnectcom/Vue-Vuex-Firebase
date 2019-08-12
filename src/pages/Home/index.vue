<template>
  <div class="container">
    <h1 class="mt-5 mb-5 text-center">TO-DO LIST</h1>

    <div class="row">
      <div class="col-md-6">
        <div class="col-md-12 mt-2 mb-2">
          <input v-model="form.title" class="p-2 input" type="text" />
        </div>
        <div class="col-md-12 mt-2 mb-2">
          <textarea rows="6" v-model="form.description" class="p-2 input" type="text" />
        </div>
        <div class="col-md-12 mt-2 mb-2">
          <input v-model="form.data" class="p-2 input" type="date" />
        </div>
        <div class="col-md-12 mt-4 mb-2 text-center">
          <button v-on:click="writeUserData()">Adicionar</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="col-md-12 card">
          <div class="p-2">
            <input type="checkbox" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      form: {
        title: "",
        description: "",
        data: ""
      }
    };
  },

  methods: {
    writeUserData(title, description, data) {
      firebase
        .database()
        .ref(title)
        .set({
          title: title,
          description: description,
          data: data
        });
    }
  }
};
</script>

<style>
.risca {
  text-decoration: line-through;
}
.input {
  width: 100%;
  border: 1px solid #eee;
}
</style>
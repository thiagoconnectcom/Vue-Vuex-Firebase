<template>
  <div class="wrap p-5">
    <div class="wrap-form col-xl-6 pt-5 text-center">
      <h4>Faça seu login</h4>
      <form class="mt-5" @submit.prevent="sign()">
        <!-- form group :: email -->
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Endereço de email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            v-model="email"
            placeholder="E-mail"
            autocomplete="off"
          />
        </div>

        <!-- form group :: password -->
        <div class="form-group pt-2">
          <label for="inputPassword" class="sr-only">Senha</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="password"
            placeholder="Senha"
            autocomplete="off"
          />
        </div>

        <!-- form group :: button acessar -->
        <div class="text-center mt-5 mb-4">
          <button type="submit" class="btn btn-success">Acessar Conta</button>
        </div>
        <div class="text-center mt-3 mb-5">
          <router-link to="/cadastrar">Cadastro</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  metaInfo: {
    title: "Login"
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    sign: function() {
      const { email, password } = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          () => {
            alert(`email encontrado com sucesso  `);

            // this.$store.commit('setTarefas', )
            this.$router.push("/home");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>

<style lang="scss">
.wrap {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap-form {
    background-color: #f8f8f8;
    border-radius: 5px;
  }
}
</style>
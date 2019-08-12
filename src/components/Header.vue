<template>
  <div>
    <header>
      <img
        src="https://static.wixstatic.com/media/bbc887_d7a50ce2e13b4ed1965288d79a8f9875~mv2.png/v1/fill/w_201,h_36,al_c,q_80,usm_0.66_1.00_0.01/bbc887_d7a50ce2e13b4ed1965288d79a8f9875~mv2.webp"
      />
      <button class="close" v-on:click="signOut">close</button>
    </header>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          alert(`Até a Próxima Vez!`);
          window.location.href = "/";
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  }
};
</script>

<style lang="scss">
header {
  padding: 30px;
  background-color: black;
  img {
  }
  .close {
    float: right;
    color: #fff;
    background-color: transparent;
    font-weight: bold;
  }
  .close:hover {
    color: red;
  }
}
</style>
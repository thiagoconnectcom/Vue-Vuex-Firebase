<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
</style>

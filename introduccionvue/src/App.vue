<template>
  <div>
    <HelloWorld></HelloWorld>
    <MiComponente></MiComponente>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MiComponente from "./components/MiComponente";

export default {
  name: "App",
  components: {
    HelloWorld,
    MiComponente,
  },
};
</script>

<style>
</style>

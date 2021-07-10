<template>
  <v-container>
    <nav-pagina />
    <!-- <hello-world /> -->
    <botones />
    <footer-pagina />
    
  </v-container>
</template>

<script>
import Botones from '../components/Botones.vue';
import FooterPagina from "../components/Footer-pagina.vue";
import HelloWorld from "../components/HelloWorld";
import NavPagina from "../components/Nav-pagina.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    FooterPagina,
    NavPagina,
    Botones,
  },
};
</script>

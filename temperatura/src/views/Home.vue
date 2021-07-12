<template>
  <v-container>
    <nav-pagina />
    <!-- <hello-world /> -->
    <botones />
    <pagina-estructura />
    <footer-pagina />
  </v-container>
</template>

<script>
import FooterPagina from "../components/Footer-pagina.vue";
import NavPagina from "../components/Nav-pagina.vue";
import Botones from "../components/Botones.vue";
import HelloWorld from "../components/HelloWorld.vue";
import PaginaEstructura from "../components/Pagina-estructura.vue";

export default {
  name: "Home",

  components: {
    NavPagina,
    FooterPagina,
    Botones,
    HelloWorld,
    PaginaEstructura,
  },
};
</script>
  
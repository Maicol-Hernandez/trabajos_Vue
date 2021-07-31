<template>
<v-container>
<nav-pagina />
  <botones />
  <pagina-estructura />
  <footer-pagina />

</v-container>

</template>

<script>
import Botones from "../components/Botones.vue";
import FooterPagina from '../components/Footer-pagina.vue';
import HelloWorld from "../components/HelloWorld";
import NavPagina from '../components/Nav-pagina.vue'
import PaginaEstructura from '../components/Pagina-estructura.vue';

export default {
  name: "Home",

  components: {
    NavPagina,
    HelloWorld,
    Botones,
    FooterPagina,
    PaginaEstructura,
  },
};
</script>

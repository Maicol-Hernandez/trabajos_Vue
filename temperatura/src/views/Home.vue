<template>
  <v-container fluid class="text-center accent">
    <nav-pagina></nav-pagina>

    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary mt-2" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="error mt-2" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>

    <v-layout
      class="mt-6 lime accent-2"
      justify-center
      align-center
      style="height: 300px"
    >
      <v-flex class="info mx-4" xs8>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="green accent-3 white--text mx-4" xs8>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout class="text-left">
      <v-flex>
        <h1 class="display-1 text-uppercase mx-4 my-4">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-16 my-16">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>
    <footer-pagina></footer-pagina>
  </v-container>
</template>

<script>
import FooterPagina from "../components/Footer-pagina.vue";
import NavPagina from "../components/Nav-pagina.vue";
export default {
  name: "Home",
  components: {
    NavPagina,
    FooterPagina,
  },
};
</script>
  
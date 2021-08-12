<template>
  <v-container>
    <propiedades-computadas />
  </v-container>
</template>
<script>
import PropiedadesComputadas from "../components/propiedades-computadas.vue";
export default {
  name: "Propiedades",
  components: {
      PropiedadesComputadas
  },
  data: () => ({}),
};
</script>
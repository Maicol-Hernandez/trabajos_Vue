<template>
  <v-container>
    <!-- <app-tareas /> -->
    <app-bar />
  
  </v-container>
</template>
<script>
import AppTareas from "../components/app-tareas.vue";
import AppBar from "../components/AppBar.vue";
export default {
  name: "ListaTareas",
  components: {
    AppTareas,
    AppBar,
  },
  data: () => ({}),
};
</script>
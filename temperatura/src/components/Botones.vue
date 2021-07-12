<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex xs12 mx-4 my-4>
        <h2>Botones colores</h2>
        <v-btn>Texto</v-btn>
        <v-btn class="primary mx-4 my-4">Texto</v-btn>
        <v-btn dark class="blue">Texto</v-btn>
      </v-flex>
      <v-flex xs5 mx-4 my-4>
        <h2>Botones sin fondo</h2>
        <v-btn text color="warning">Sin fondo</v-btn>
        <v-btn loading class="mx-4 my-4" color="success">Boton</v-btn>
        <v-btn color="primary">Boton</v-btn>
        <v-btn color="info">Boton</v-btn>
        <v-btn class="warning mx-4 my-4" color="error">Boton</v-btn>
        <v-btn color="secondary">Boton</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
export default {
  name: "Botones",
  data() {
    return {};
  },
  methods: {
    loading() {
      this.loading = false;
      console.log("hola Maicol", this.loading);
    },
  },
};
</script>
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
        <v-btn small color="primary">Boton</v-btn>
        <v-btn large color="info">Boton</v-btn>
        <v-btn disabled class="warning mx-4 my-4" color="error">Boton</v-btn>
        <v-btn block color="secondary">Boton</v-btn>
      </v-flex>
      <v-flex xs7>
        <h2>Botones</h2>
        <v-btn depressed color="success">Boton</v-btn>
        <v-btn class="mx-4 my-4" color="info">Boton</v-btn>
        <v-btn color="error">Boton</v-btn>
      </v-flex >

      <v-flex class="error" xs15 >
      <h2>Icons</h2>
        <v-btn class="" icon color="pink"> 
          <v-icon>mdi-google-photos</v-icon>
        </v-btn>

        <v-btn class="mx-4 my-4" color="error">Boton</v-btn>
        <v-btn color="warning">Boton</v-btn>
        <v-btn class="ml-4 mr-4" color="success">Boton</v-btn>
        <v-btn class="mx-4 my-4" color="info">Boton</v-btn>
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
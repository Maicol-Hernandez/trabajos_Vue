<template>
  <div id="mi-componente">
    <hr />
    <h1>Este es el MI COMPONENTE</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
    <hr />
    <ul>
      <li v-for="fruta in frutas" :key="fruta.cantidad">
        | {{ fruta.cantidad }} | {{ fruta.nombre }}
        <span v-if="fruta.cantidad === 0"> - Sin Stock </span>
      </li>
    </ul>
    <hr />
    <div v-for="pokemon in info" :key="pokemon">
      Nombre del Pokemon:
      {{ pokemon.name }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MiComponente",

  data() {
    return {
      subtitulo: "Soy el subtitulo de MiComponente",
      frutas: [
        { nombre: "Manzana", cantidad: 5 },
        { nombre: "Pera", cantidad: 10 },
        { nombre: "Mango", cantidad: 7 },
        { nombre: "Fresa", cantidad: 0 },
        { nombre: "Piña", cantidad: 14 },
      ],
    };
  },
  dataPokemon() {
    return {
      nombrePekemon: null,
    };
  },
  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        this.info = response.data.results;
        console.log("this.info: ", this.info);

        this.info.forEach((element) => {
          this.infoNombre = element;
          console.log("this.infoNombre: ", this.infoNombre);
        });
      })
      .catch((error) => console.log(error));
    //async await

    const obtenerPokemones = async () => {
      try {
      } catch (error) {}
    };
  },
};
</script>


<style>
</style>





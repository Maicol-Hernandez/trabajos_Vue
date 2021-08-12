<template>
  <v-container fluid class="text-center primary">
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe ducimus aliquid reprehenderit molestiae corrupti deserunt, nulla hic iure officiis facere velit quia, quis ad minus itaque explicabo vel. Sapiente.
        </h1>
      </v-flex>
      <v-flex class="secondary mt-2" xs6>
        <h1>6
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio harum officiis placeat natus voluptatum adipisci eaque. Molestias excepturi minima neque, rerum iure, quisquam incidunt eveniet sunt reprehenderit doloribus sapiente.
        </h1>
      </v-flex>
      <v-flex class="error mt-2" xs6>
        <h1>6
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, recusandae, quidem harum quis aliquam delectus, magnam doloribus repudiandae at autem sequi odit ullam a laborum officia? Cumque, ex laborum. Impedit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique sit amet, unde, eos vero odit atque enim earum accusamus minima, harum laudantium perferendis! Error porro molestias consequuntur commodi pariatur.
        </h1>
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
  </v-container>
</template>

<script>
export default {
  name: "Pagina-estructura",
  data: () => ({

  }) 
};
</script>
<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            autem reprehenderit? Sapiente labore iure in veritatis tenetur,
            quidem explicabo non et, ducimus animi quaerat corrupti officiis
            numquam repellendus eligendi cumque?
          </p>
        </v-col>

        <v-col cols="12" sm="4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            autem reprehenderit? Sapiente labore iure in veritatis tenetur,
            quidem explicabo non et, ducimus animi quaerat corrupti officiis
            numquam repellendus eligendi cumque?
          </p>
        </v-col>
      </v-row>
    </v-container>
      <div>
    <!-- Ejemplo PROSP Align -->

    <!-- <v-container
      fluid
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row :align="align" style="height: 150px" no-gutters>
        <v-col v-for="n in 3" :key="n">
          <v-card color="success" class="pa-2" outlined tile>
            <v-card-title>Estoy aca</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    <!--  -->
    <br />

    <v-container fluid class="grey lighten-5">
      <v-row no-gutters style="height: 150px">
        <v-col v-for="align in alignments" :key="align" :align-self="align">
          <v-card class="pa-2" color="error" outlined tile> Estoy aca </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>
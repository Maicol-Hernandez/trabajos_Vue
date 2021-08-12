<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-row>
        <v-col cols="12">
          <v-col sm="6">
            <v-flex md6>
              <v-card class="mb-3">
                <v-card-title class="success">
                  <v-chip color="pink" label text-color="white">
                    <v-icon left> mdi-label </v-icon>
                    Titulo de Tareas
                  </v-chip>
                </v-card-title>
                <v-card-text class="info">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis atque esse corrupti aspernatur possimus soluta,
                    dolorum dolor id provident nostrum ea, iusto quia quasi eos
                    impedit fuga eligendi nemo. Dolorum.
                  </span>
                </v-card-text>
                <v-card-actions class="red">
                  <v-btn color="warning" class="ml-2"> Editar </v-btn>
                  <v-btn color="error"> Eliminar </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-col>
          <v-col sm="6">
            <v-flex md6>
              <v-card class="mb-3">
                <v-card-title></v-card-title>
              </v-card>
            </v-flex>
          </v-col>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "app-tareas",
  data: () => ({}),
};
</script>
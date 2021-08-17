<template>
  <v-container>
    <v-row dense>
      <v-col class="warning" md="6" v-for="n in 2" :key="n" cols="12">
        <v-card color="primary" outlined tile class="pa-5">
          Sistema de Columnas
        </v-card>
      </v-col>
    </v-row>

    <v-row dense class="warning">
      <v-col cols="12" class="error">
        <v-row>
          <v-col cols="12" sm="6">
            <v-card class="mb-3">
              <v-card-title class="success">
                <v-chip color="pink" label text-color="white">
                  <v-icon left> mdi-label </v-icon>
                  Titulo de Tareas
                </v-chip>
              </v-card-title>

              <v-card-text class="info">
                <v-card-subtitle>
                  <v-btn color="success"> ver mas </v-btn></v-card-subtitle
                >
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
          </v-col>
        </v-row>

        <v-card class="pa-2" outlined tile>
          <v-card-title>
            <v-chip color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Titulo de Tareas
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-card-subtitle> Titulo de la tarea #2 </v-card-subtitle>
            <span
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              aliquid nostrum ad dignissimos optio ducimus dolores quos nemo
              maiores. Fuga a distinctio harum illum voluptatem quaerat
              recusandae repellendus aliquam esse.</span
            >
          </v-card-text>
          <v-card-actions>
            <v-btn color="warning" class="ml-2"> Editar </v-btn>
            <v-btn color="error"> Eliminar </v-btn>
          </v-card-actions>
        </v-card>

        <v-row>
          <v-col cols="12" sm="6">
            <v-flex xs12>
              <v-card class="mb-3">
                <v-card-title></v-card-title>
                <v-card-text></v-card-text>
                <v-card-actions></v-card-actions>
              </v-card>
            </v-flex>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
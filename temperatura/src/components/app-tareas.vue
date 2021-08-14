<template>
  <v-container fluid class="grey lighten-2">
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-card
          class="pa-2 mb-2"
          outlined
          tile
          v-for="(item, index) in listaTareas"
          :key="index"
        >
        {{ index }}
          <v-card-title>
            <v-chip color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Titulo de Tareas
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-card-subtitle>
              {{ item.titulo }} #{{ item.id }}
            </v-card-subtitle>
            <span>{{ item.descripcion }}</span>
          </v-card-text>
          <v-card-actions>
            <v-btn color="warning" class="ml-2"> Editar </v-btn>
            <v-btn @click="deleteNote(index)" color="error"> Eliminar </v-btn>
          </v-card-actions>
        </v-card>
        <!-- <v-card class="pa-2" outlined tile>
          <v-card-title>
            <v-chip color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Titulo de Tareas
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-card-subtitle>
              Titulo de la tarea #2
            </v-card-subtitle>
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
        </v-card> -->
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card class="mb-3 pa-3" outlined tile>
          <v-form
            ref="form"
            lazy-validation
            v-model="formValido"
            @submit.prevent="submit"
          >
            <v-text-field
              type="field"
              label="Titulo de la tarea"
              v-model="titulo"
              :counter="contadorTitulo"
              :rules="tituloRules"
              aria-required
            >
            </v-text-field>
            <v-textarea
              type="textarea"
              label="Descripcion de la Tarea"
              v-model="descripcion"
              aria-required
              :rules="textAreaRules"
            >
            </v-textarea>
            <v-btn
              :disabled="!formValido"
              @click="validate"
              block
              type="submit"
              color="success"
              >Agregar Tarea</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <div>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" color="pink" text @click="snackbar = false">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <!-- <v-row dense>
      <v-col class="warning" md="6" v-for="n in 2" :key="n" cols="12">
        <v-card color="primary" outlined tile class="pa-5">
          Sistema de Columnas
        </v-card>
      </v-col>
    </v-row> -->

    <!-- 
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
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "app-tareas",
  data: () => ({
    alignments: ["start", "center", "end"],
    justify: ["start", "center", "end", "space-around", "space-between"],
    listaTareas: [
      {
        id: 1,
        titulo: "Titulo de la tarea",
        descripcion:
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam aliquid nostrum ad dignissimos optio ducimus dolores quos nemo maiores. Fuga a distinctio harum illum voluptatem quaeratrecusandae repellendus aliquam esse. ",
      },
      {
        id: 2,
        titulo: "Titulo de la tarea",
        descripcion:
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam aliquid nostrum ad dignissimos optio ducimus dolores quos nemo maiores. Fuga a distinctio harum illum voluptatem quaeratrecusandae repellendus aliquam esse. ",
      },
    ],
    titulo: "",
    index: null,
    descripcion: "",
    formValido: true,
    buttonSubmit: true,
    snackbar: false,
    text: "",
    contadorTitulo: 15,
    contadorTextArea: 10,
    tituloRules: [
      (v) => !!v || "El Titulo es requerido.",
      (v) =>
        (v && v.length <= 15) ||
        "El Titulo debe tener como maximo 15 caracteres.",
    ],
    textAreaRules: [
      (v) => !!v || "La descripcion es requerida.",
      (v) =>
        (v && v.length >= 10) ||
        "La descripcion debe tener como minimo 10 caracteres.",
    ],
  }),

  methods: {
    validate: function () {
      this.$refs.form.validate();
    },

    submit: function () {
      this.snackbar = true;
      let item = {};
      item.titulo = this.titulo;
      item.descripcion = this.descripcion;
      item.id = Date.now();
      console.log(item);

      this.listaTareas.push(item);
      this.text = "Se agrego la tarea con exiso!";
      this.reset();
    },
    deleteNote: function () {
      console.log(index)
      this.listaTareas = [];
    },

    reset: function () {
      
      this.$refs.form.reset();
    },
  },
};
</script>
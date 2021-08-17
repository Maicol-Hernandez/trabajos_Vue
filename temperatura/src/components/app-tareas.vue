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
          <v-card-title>
            <v-chip color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Titulo de Tareas
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-card-subtitle>
              {{ item.titulo }}
            </v-card-subtitle>
            <span>{{ item.descripcion }}</span>
          </v-card-text>
          <v-card-actions>
            <v-btn color="warning" @click="updateForm(item)" class="ml-2">
              Editar
            </v-btn>
            <v-btn @click="deleteNote(index)" color="error"> Eliminar </v-btn>
          </v-card-actions>
        </v-card>
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

      <v-dialog ref="modal" v-model="modal" persistent max-width="500px">
        <v-card>
          <v-card-title class="indigo">
            <span class="headline" style="color: white">
              <v-icon color="white"> mdi-pencil </v-icon>
              {{ modalTitle }}
            </span>
          </v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Titulo de la tarea"
                    type="field"
                    :rules="tituloRules"
                    v-model="tituloUpdate"
                    :counter="contadorTitulo"
                    aria-required=""
                  >
                  </v-text-field>
                  <v-textarea
                    v-model="descripcionUpdate"
                    type="textarea"
                    label="Descripcion de la tarea"
                    aria-required
                    :rules="textAreaRules"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="modal = false" color="warning"> Cancelar </v-btn>
            <v-btn
              :disabled="!descripcionUpdate || !tituloUpdate"
              @click="saveUpdateNote(modal)"
              color="warning"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    tituloUpdate: "",
    descripcionUpdate: "",
    itemIndex: -1,
    descripcion: "",
    formValido: true,
    buttonSubmit: true,
    snackbar: false,
    text: "",
    contadorTitulo: 25,
    contadorTextArea: 10,
    modal: false,
    tituloRules: [
      (v) => !!v || "El Titulo es requerido.",
      (v) =>
        (v && v.length <= 25) ||
        "El Titulo debe tener como maximo 25 caracteres.",
    ],
    textAreaRules: [
      (v) => !!v || "La descripcion es requerida.",
      (v) =>
        (v && v.length >= 10) ||
        "La descripcion debe tener como minimo 10 caracteres.",
    ],
  }),
  computed: {
    modalTitle: function () {
      return this.itemIndex === -1 ? "Nueva Tarea" : "Editar tarea";
    },
  },

  watch: {},

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
      this.listaTareas.push(item);
      this.text = "Se agrego la tarea con exiso!";
      this.reset();
    },
    updateForm: function (item) {
      this.modal = true;
      this.itemIndex = this.listaTareas.indexOf(item);

      this.tituloUpdate = item.titulo;
      this.descripcionUpdate = item.descripcion;
    },
    saveUpdateNote: function (modal) {
      if (modal === true) {
        this.listaTareas[this.itemIndex].titulo = this.tituloUpdate;
        this.listaTareas[this.itemIndex].descripcion = this.descripcionUpdate;
        this.snackbar = true;
        this.text = "Se edito la tarea correctamente !";
      } else {
        this.modal = false;
      }
      this.modal = false;
    },

    deleteNote: function (index) {
      this.listaTareas.splice(index, 1);
      this.snackbar = true;
      this.text = "Se elimino la tarea correctamente!";
    },

    reset: function () {
      this.$refs.form.reset();
    },
  },
};
</script>
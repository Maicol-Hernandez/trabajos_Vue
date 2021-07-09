<template>
  <div id="contenedor">
    <v-card class="table" elevation="4">
      <v-toolbar flat elevation="4">
        <v-card class="icon">
          <v-icon
            style="margin-left: 30px; margin-top: 25px"
            color="white"
            x-large=""
            >mdi-folder-plus-outline</v-icon
          >
        </v-card>
        <div class="usuario">GENERAR REPORTE</div>
      </v-toolbar>
      <v-container grid-list-md style="margin-top: 50px">
        <v-layout wrap>
          <v-flex xs12 sm12 md12>
            <v-menu
              v-model="fechaI"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="editedItem.fechaExpedicion"
                  label="INGRESAR DIA DE REPORTE"
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
                <v-text-field
                  v-model="textInput"
                  label="NOMBRE"
                  prepend-icon="mdi-account"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="editedItem.fechaExpedicion"
                @input="fechaI = false"
                locale="es-co"
              ></v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 sm12 md12 class="text-center">
            <v-btn
              class="ma-2"
              outlined
              color="#111c3d"
              :disabled="!editedItem.fechaExpedicion"
              @click="crearReporte"
              >GENERAR REPORTE</v-btn
            >
          </v-flex>

          <span class="">{{ menssage }}</span>
          <hr />
        </v-layout>
      </v-container>

      <ul v-for="items in info" :key="items.id">
        <hr />
        <li>nombre: {{ items.nombre }}</li>
        <li>id: {{ items.id }}</li>
        <li>fecha: {{ items.fecha }}</li>
        <li>cedula: {{ items.cedula }}</li>
        <li>fecha de expedicion: {{ items.fechaExpedicion }}</li>
        <li>temperatura: {{ items.temperatura }}</li>
        <li>desinfeccion: {{ items.desinfe }}</li>
        <li>elementos: {{ items.elementos }}</li>
        <li>puesto: {{ items.puesto }}</li>
        <li>lavado: {{ items.lavado }}</li>
        <li>estado: {{ items.estado }}</li>
        <li>ubicacion: {{ items.ubicacion }}</li>
      </ul>
    </v-card>
    
  </div>
</template>
<script>
import axios from "axios";
import env from "./env";
import XLSX from "xlsx";
export default {
  name:"Reportes",
  data() {
    return {
      menssage: "",
      textInput: "",
      text: "",
      search: "",
      fechaI: false,
      info: [],
      editedItem: {
        fechaExpedicion: "",
      },
    };
  },
  methods: {
    crearReporte() {
      this.menssage = "INFORME DEL REPORTE";
      console.log(
        `this.editedItem.fechaExpedicion: ${this.editedItem.fechaExpedicion}`,
        `this.menssage: ${this.menssage}`
      );
      axios
        .get(
          `${env.endpoint}temperatura/reporte?fecha=${this.editedItem.fechaExpedicion}`
        )
        .then((res) => (this.info = res.data));

      console.log(`this.info: ${this.info}`);
      setTimeout(() => {
        let data = XLSX.utils.json_to_sheet(this.info);
        console.log(`data: ${data}`);
        const workbook = XLSX.utils.book_new();
        const filename = "Reporte " + this.editedItem.fechaExpedicion;
        XLSX.utils.book_append_sheet(workbook, data, filename);
        XLSX.writeFile(workbook, `${filename}.xlsx`);
      }, 1500);
    },
  },
};
</script>     
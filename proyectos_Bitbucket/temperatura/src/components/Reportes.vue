<template>
  <div id="contenedor">
        <v-card class="table" elevation="4">
          <v-toolbar flat elevation="4">
            <v-card class="icon">
                <v-icon style="margin-left:30px; margin-top:25px" color="white" x-large="">mdi-folder-plus-outline</v-icon>
            </v-card>   
            <div class="usuario">GENERAR REPORTE</div>
          </v-toolbar>
          <v-container grid-list-md style="margin-top:50px">
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
                    </template>
                    <v-date-picker v-model="editedItem.fechaExpedicion" @input="fechaI = false" locale="es-co"></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs12 sm12 md12 class="text-center">
                  <v-btn 
                  class="ma-2" 
                  outlined 
                  color="#111c3d"
                  :disabled="!editedItem.fechaExpedicion"
                  @click="crearReporte"
                  >GENERAR REPORTE</v-btn>
                </v-flex>
            </v-layout>
          </v-container>
        </v-card>         
  </div>
</template>
<script>
import axios from "axios";
import env from "./env";
import XLSX from "xlsx"
export default {
  data() {
    return {
      text: "",
      search: "",
      fechaI:false,
      info:[],
      editedItem: {
        fechaExpedicion: "",
      }
    };
  },
  methods: {
    crearReporte(){      
        axios
        .get(`${env.endpoint}temperatura/reporte?fecha=${this.editedItem.fechaExpedicion}`)
        .then(res => (this.info = res.data)
        );
        console.log(this.info);
        
        setTimeout(() => {
            let data = XLSX.utils.json_to_sheet(this.info)
            const workbook = XLSX.utils.book_new()
            const filename = 'Reporte '+ this.editedItem.fechaExpedicion
            XLSX.utils.book_append_sheet(workbook, data, filename)
            XLSX.writeFile(workbook, `${filename}.xlsx`)
        }, 1500);        
    },
  }
};
</script>    
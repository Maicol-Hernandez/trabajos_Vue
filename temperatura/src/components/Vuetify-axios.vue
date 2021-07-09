<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-card>
          <v-date-picker
            v-model="fecha"
            full-width
            locale="es-cl"
            :min="minFecha"
            :max="maxFecha"
            @change="getDolar(fecha)"
            color="black"
          >
          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text id="possion" class="display-2 text-xs-center">
            {{ valor }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex"

export default {
  name: "Vuetify-axios",
  data() {
    return {
      fecha: new Date().toISOString().substr(0, 10),
      maxFecha: new Date().toISOString().substr(0, 10),
      minFecha: "1984",
      valor: null,
      subtitulo: "Soy el subtitulo de Vuetify-axios",
    };
  },
  methods: {
    ...mapMutations(['mostrarLoading','ocultarLoading']),
    async getDolar(dia) {
    //  console.log("dia:", dia);
      let arrayFecha = dia.split(["-"]);
      // console.log("arrayFecha: ", arrayFecha);
      let ddmmyy = arrayFecha[2] + "-" + arrayFecha[1] + "-" + arrayFecha[0];
      //console.log("ddmmyy:", ddmmyy);
      try {
        this.mostrarLoading({titulo:'Accediendo a informacion', color:'secondary'})

        let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`);
        //console.log(datos.data.serie[0].valor);
        console.log(datos.data)
        if (datos.data.serie.length > 0) {
        this.valor = await datos.data.serie[0].valor;

        } else {
          this.valor = "Sin resultados" 
        }
        //console.log("this.valor",this.valor)
      } catch (error) {
        console.log(error);
      } finally {
        this.ocultarLoading()
      }
    },
  },
  created() {
    this.getDolar(this.fecha);
  },
};
</script>

<style>
#possion {
  text-align: center;
}
</style>
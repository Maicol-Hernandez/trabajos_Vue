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
      <v-card-text class="p-0">
        <v-list>
          <v-list-group
            :value="true"
            prepend-icon="mdi-checkbox-marked-outline"
            active-class="blue--text text--darken-4"
          >
            <template v-slot:activator>
              <v-list-item-title>
                Lista de
                <strong>Nombres</strong> lenguajes de programacion
              </v-list-item-title>
            </template>
            <v-container fluid class="white black--text">
              <v-col cols="12" class="mt-0 pt-0">
                <v-data-table
                  :headers="herders"
                  :items="myArrayNombres"
                  :items-per-page="5"
                  class="elavation-2"
                  @click="listaNombres(item)"
                  >Agregar
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn color="warning">Agregar</v-btn>

                    <v-icon
                      fat
                      class="ml-5"
                      color="green"
                      @click="listaNombres(item)"
                    >
                      mdi-account-box</v-icon
                    >
                  </template>
                </v-data-table>
              </v-col>
            </v-container>
          </v-list-group>
        </v-list>
      </v-card-text>
    </v-layout>
    <template>
      <div>
        <a
          color="info"
          v-on:click.self="hazEsto('Es una ventana modal!!.', $event)"
          >Hola!!</a
        >
        <label for="">Estoy aca</label>
        <ul>
          <li v-for="item of myArrayNombres" :key="item.name">
            {{ item.descripcion }} || {{ item.name }} || {{ item.calificacion }}
          </li>
        </ul>
        <ul>
          <li v-for="(item, index) in myArrayNombres" :key="item.name">
            {{ mansajePadre }} || {{ item.name }} || {{ index }}
          </li>
        </ul>
        <ul>
          <li v-for="value of perfilUser" :key="value.edad">
            {{ value }}
          </li>
        </ul>
        <v-btn color="success" @click="numeros(valores, myArrayNombres)">
          enviar
        </v-btn>
        <input type="text" v-model="message" placeholder="Digite cualquier cosa" />
        <span>Mensaje de muchas lineas: </span>
        <p style="white-space: pre-line">{{ message }}</p>
        <br />
        <textarea
          v-model="message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>Hola!! {{ nombreCompleto }}</div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Vuetify-axios",
  data() {
    return {
      fecha: new Date().toISOString().substr(0, 10),
      maxFecha: new Date().toISOString().substr(0, 10),
      minFecha: "1984",
      valor: null,
      subtitulo: "Soy el subtitulo de Vuetify-axios",
      message: "",
      mansajePadre: "Este es el mensaje principal",

      primerNombre: "Maicol Fernando",
      segundoNombre: "Hernandez Peralta",
      herders: [
        {
          text: "Lenguaje de programacion",
          value: "name",
          align: "center",
          class: "column",
        },
        {
          text: "Descripcion",
          value: "descripcion",
          align: "center",
          class: "colunm",
        },
        {
          text: "Calificacion",
          value: "calificacion",
          align: "center",
          class: "colunm",
        },
        { text: "Acciones", value: "actions", sortable: false },
      ],

      myArrayNombres: [
        {
          name: "Python",
          descripcion: "Lenguaje de programacion",
          calificacion: 4.2,
        },
        {
          name: "Java",
          descripcion: "Lenguaje de programacion orientado a objectos",
          calificacion: 4.6,
        },
      ],

      perfilUser: {
        primerNombre: "Maicol",
        segundoNombre: "Fernando",
        primerApellido: "Hernandez",
        segundoApellido: "Peralta",
        edad: 20,
      },

      valores: [12, 22, 55, 66, 44],
      //hazEsto: "Hola!!",
    };
  },

  watch: {},

  mounted() {
    console.log(this.message);
    console.log("Hola estoy aca!! ");
    let timeout = (method, ms) =>
      new Promise((resolve) => {
        setTimeout(() => {
          method();
          resolve();
        }, ms);
        console.log(ms);
      });

    // const timeout = (method, ms) =>
    //   new Promise((resolve) =>
    //     setTimeout(() => {
    //       method();
    //       resolve();
    //     }, ms)
    //   );

    let myObject = {
      name: "Python",
      descripcion: "Lenguaje de programacion",
      calificacion: 4.2,
    };

    (async () => {
      for await (let [key, value] of Object.entries(myObject)) {
        await timeout(() => console.log("key -> " + key), 1000);
        console.log("value: -> " + value);
      }
    })();

    // (async () => {
    //   for await (let [key, value] of Object.entries(myObject)) {
    //     await timeout(() => console.log("key -> " + key), 1000);
    //     console.log("value: -> " + value);
    //   }
    // })();

    let perfilUser = {
      primerNombre: "Maicol",
      segundoNombre: "Fernando",
      primerApellido: "Hernandez",
      segundoApellido: "Peralta",
      edad: 20,
    };
    //this.numeros(valores, perfilUser);
    // this.nuemros([45, 55, 444], nombres);

    //console.log("this.nuemros", this.nuemros(operacion, nombres));
    // console.log("this.nuemros()", this.nuemros());
    // this.nuemros().then((res) => {
    //   console.log("res", res);
    // });
  },
  computed: {
    // nombreCompleto: function() {
    //   return this.primerNombre + ' ' + this.segundoNombre
    // },
    nombreCompleto: {
      //   // getter
      get: function () {
        return this.primerNombre + " " + this.segundoNombre;
      },
      //setter
      set: function (newValue) {
        var nombres = newValue.split(" ");
        this.primerNombre = nombres[0];
        this.segundoNombre = nombres[nombres.length - 1];
        console.log("this.segundoNombre", nombres);
      },
    },

    operacion: function (valores, perfilUser) {
      let total = 0;
      // console.log(perfil);

      console.log(valores.valores);

      console.log(perfilUser);
      // for (const item of valores) {
      //   total += item;
      //   console.log(total);
      //   if (total == 199) {
      //     console.log(`Total $${total}`);
      //   }
      // }
      // var operacion = total / valores.length;
      //   await console.log("valores", valores, nombres);
      // await  console.log("Dentro de la promesa!! ", total++)
    },
  },
  methods: {
    numeros: function (valores, perfilUser) {
      console.log(valores);
      console.log(perfilUser);
      // const numeros = valores.assign([]);
      // console.log("numeros", numeros);
      // const user = perfilUser.assign({});
      // console.log("numeros", numeros);
      // this.operacion(valores, perfilUser);
      // return nombres, operacion;
    },
    hazEsto: function (message, event) {
      if (event) event.preventDefault();
      alert(message);

      console.log("hola");
    },

    listaNombres: function (listaNombres) {
      console.log(listaNombres);
      const nombres = Object.assign([], listaNombres);
      console.log(nombres);
      let addLenguaje = [];

      nombres.forEach((element) => {
        console.log("element", element);
      });

      for (const lenguaje of nombres) {
        console.log("lenguaje", lenguaje);
        //addLenguaje.push(lenguaje)
        console.log("addLenguaje", addLenguaje);
      }
      console.log("Termina aca!! ");
    },

    ...mapMutations(["mostrarLoading", "ocultarLoading"]),
    async getDolar(dia) {
      //  console.log("dia:", dia);
      let arrayFecha = dia.split(["-"]);
      // console.log("arrayFecha: ", arrayFecha);
      let ddmmyy = arrayFecha[2] + "-" + arrayFecha[1] + "-" + arrayFecha[0];
      //console.log("ddmmyy:", ddmmyy);
      try {
        this.mostrarLoading({
          titulo: "Accediendo a informacion",
          color: "secondary",
        });

        let datos = await axios.get(
          `https://mindicador.cl/api/dolar/${ddmmyy}`
        );
        //console.log(datos.data.serie[0].valor);
        console.log(datos.data);
        if (datos.data.serie.length > 0) {
          this.valor = await datos.data.serie[0].valor;
        } else {
          this.valor = "Sin resultados";
        }
        //console.log("this.valor",this.valor)
      } catch (error) {
        console.log(error);
      } finally {
        this.ocultarLoading();
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

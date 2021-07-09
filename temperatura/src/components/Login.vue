<template>
  <div id="contenedor">
    <div>
      <nav-pagina></nav-pagina>
    </div>
    <v-card class="table" elevation="4">
      <v-toolbar flat elevation="4">
        <v-card class="icon">
          <v-icon
            style="margin-left: 30px; margin-top: 25px"
            color="white"
            x-large=""
            >mdi-file-star-outline</v-icon
          >
        </v-card>
        <div class="usuario">REGISTRO TEMPERATURA</div>
        <v-spacer></v-spacer>
      </v-toolbar>
      <br />

      <!-- componente del modal para agregar y actualizar -->
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm12 md612>
              <v-text-field
                v-model="editedItem.cedula"
                label="Cedula"
                mask="#############"
                prepend-icon="mdi-account-box-outline"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-text-field
                v-model="editedItem.nombre"
                label="Nombre"
                prepend-icon="mdi-account"
              ></v-text-field>
            </v-flex>
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
                    label="FECHA EXPEDICIÓN CC"
                    prepend-icon="mdi-calendar-range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="editedItem.fechaExpedicion"
                  @input="fechaI = false"
                  locale="es-co"
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-select
                item-value="valor"
                item-text="valor"
                prepend-icon="mdi-coolant-temperature"
                :items="temperatura"
                label="Temperatura en grados"
                v-model="editedItem.temperatura"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm8 md8>
              <br />
              <v-subheader style="font-size: 17px; text-align: left"
                >¿En su puesto de trabajo cuentan con gel
                antibacterial?</v-subheader
              >
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-radio-group v-model="editedItem.radios1" :mandatory="false">
                <v-radio label="Si" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm8 md8>
              <br />
              <v-subheader style="font-size: 17px; text-align: left"
                >¿En su puesto de trabajo cuenta con desinfectante para
                superficies?</v-subheader
              >
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-radio-group v-model="editedItem.radios2" :mandatory="false">
                <v-radio label="Si" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm8 md8>
              <br />
              <v-subheader style="font-size: 17px; text-align: left"
                >¿Los elementos de protección (tapabocas en tela antifluido y
                careta protectora) estan en buen estado?</v-subheader
              >
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-radio-group v-model="editedItem.radios3" :mandatory="false">
                <v-radio label="Si" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm8 md8>
              <br />
              <v-subheader style="font-size: 17px; text-align: left"
                >Afirmo, que he desinfectado mi puesto de trabajo inclyendo odas
                las superficies como minimo cada 3 horas</v-subheader
              >
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-radio-group v-model="editedItem.radios4" :mandatory="false">
                <v-radio label="Si" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm8 md8>
              <br />
              <v-subheader style="font-size: 17px; text-align: left"
                >Afirmo, que he realizado el protocolo de lavado de manos minimo
                cada 3 horas</v-subheader
              >
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-radio-group v-model="editedItem.radios5" :mandatory="false">
                <v-radio label="Si" value="si"></v-radio>
                <v-radio label="No" value="no"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-select
                item-value="valor"
                item-text="valor"
                :items="estado"
                label="Su estado de salud en esta jornada laboral es:"
                v-model="editedItem.estado"
                prepend-icon="mdi-contrast"
              >
              </v-select>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-text-field
                v-model="editedItem.puntoV"
                label="Punto de Venta/Area donde Labora"
                prepend-icon="mdi-shield-home-outline"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <!-- botones para cancelar y agregregar y validacion de campos vacios -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="grey"
          @click="save"
          :disabled="
            !editedItem.cedula ||
            !editedItem.nombre ||
            !editedItem.fechaExpedicion ||
            !editedItem.temperatura ||
            !editedItem.puntoV
          "
          >Guardar</v-btn
        >
      </v-card-actions>

      <br />
      <!-- alertas de las acciones que se hacen -->
      <v-snackbar
        v-model="snackbar"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :right="x === 'right'"
        :timeout="timeout"
        :top="y === 'top'"
        :vertical="mode === 'vertical'"
        color="#111c3d"
        style="color: white"
      >
        {{ text }}
        <v-btn color="#111c3d" depressed @click="snackbar = false"
          >Cerrar</v-btn
        >
      </v-snackbar>
    </v-card>
    <div>
      <footer-pagina></footer-pagina>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "./env";
import FooterPagina from "./Footer-pagina.vue";
import NavPagina from "./Nav-pagina.vue";
export default {
  components: { FooterPagina, NavPagina },
  data() {
    return {
      show: false,
      snackbar: false,
      y: "top",
      x: null,
      fechaI: false,
      mode: "",
      timeout: 11000,
      text: "",
      estado: [
        { valor: "Bueno" },
        { valor: "Regular" },
        { valor: "Malo" },
        { valor: "Presenta sintomas gripales y fiebre" },
      ],
      temperatura: [
        {
          valor: "32",
        },
        {
          valor: "33",
        },
        {
          valor: "34",
        },
        {
          valor: "35",
        },
        {
          valor: "36",
        },
        {
          valor: "37",
        },
        {
          valor: "38",
        },
        {
          valor: "39",
        },
        {
          valor: "40",
        },
        {
          valor: "41",
        },
        {
          valor: "42",
        },
        {
          valor: "43",
        },
      ],
      defaultItem: {
        id: "",
        cedula: "",
        nombre: "",
        temperatura: "",
        fechaExpedicion: "",
        radios1: "",
        radios2: "",
        radios3: "",
        radios4: "",
        radios5: "",
        puntoV: "",
        estado: "",
      },
      editedIndex: -1,
      editedItem: {
        id: "",
        cedula: "",
        nombre: "",
        temperatura: "",
        fechaExpedicion: "",
        radios1: "",
        radios2: "",
        radios3: "",
        radios4: "",
        radios5: "",
        puntoV: "",
        estado: "",
      },
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  mounted() {},

  methods: {
    /**
     * Metodo de check pendiente
     */
    save() {
      const temperatura = JSON.stringify({
        cedula: this.editedItem.cedula,
        nombre: this.editedItem.nombre,
        fechaExpedicion: this.editedItem.fechaExpedicion,
        temperatura: this.editedItem.temperatura,
        radios1: this.editedItem.radios1,
        radios2: this.editedItem.radios2,
        radios3: this.editedItem.radios3,
        radios4: this.editedItem.radios4,
        radios5: this.editedItem.radios5,
        puntoV: this.editedItem.puntoV,
        estado: this.editedItem.estado,
      });
      // se crea el usuario
      axios
        .get(
          `${env.endpoint}temperatura/create_temperatura?temperatura=${temperatura}`
        )
        .then((res) => {
          console.log();
          if (res.data.mensaje === "temperatura registrado") {
            (this.snackbar = true),
              (this.text = "temperatura registrado correctamente");
          } else if (res.data.mensaje === "error en el registro") {
            (this.snackbar = true), (this.text = "Error al registrar");
          } else if (res.data.mensaje === "error temperatura existe") {
            (this.snackbar = true),
              (this.text = "El registro ya existe en la plataforma");
          }
        });
      this.editedItem = Object.assign({}, this.defaultItem);
    },
  },
};
</script>
<style>
.icon {
  border-radius: 10px !important;
  height: 100px;
  width: 100px;
  background-color: #111c3d !important;
}
#contenedor {
  font-family: "Source Sans Pro", sans-serif !important;
  width: 90%;
  margin: 45px auto;
}
</style>
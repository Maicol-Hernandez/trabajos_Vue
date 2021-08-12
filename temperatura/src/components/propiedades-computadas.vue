<template>
  <v-container fluid class="white black--text">
    <v-card-text class="red">
      <v-container fluid>
        <v-row class="primary d-flext justify-start">
          <v-card rounded="xl"  width="100%" class="my-2 pa-2">
            <v-col class="success mb-0 pb-0" cols="12">
              <v-row class="red  d-flext justify-start">
                <v-col sm="12" class="" md="5">
                  <v-text-field label="Ingrese el nombre"> </v-text-field>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Libero ea tempore ratione. Voluptates necessitatibus dolorum
                    atque, aliquid officia eos a, explicabo nam laboriosam amet
                    quibusdam adipisci velit molestias excepturi libero.
                  </p>
                </v-col>
                <v-col class="error">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eum facilis, fugiat sunt ut consequuntur consectetur ipsum
                    temporibus. Dolorum, consequatur natus corporis tempore
                    voluptates quam ut, eveniet incidunt alias aliquid esse!
                  </p>
                </v-col>
              </v-row>

              <v-col class="indigo">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  delectus necessitatibus quaerat dolorum ipsum placeat et
                  officiis. Ipsam porro voluptatum amet officia fugiat tenetur
                  nisi, repellat aperiam at eum accusamus!
                </p>
              </v-col>
              <v-col class="yellow">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  molestiae ipsam aliquid dolorum laboriosam eveniet deleniti.
                  Quasi cupiditate cumque expedita aut qui? Ipsum, iste
                  perspiciatis. Reprehenderit repudiandae ea consequuntur iusto?
                </span>
              </v-col>
              <v-col class="pink">
                <h2>Hola Mundo</h2>
                <h3>{{ mensaje }}</h3>
                <p>Invertido: {{ invertido }}</p>
                <v-text-field v-model="mensaje"> </v-text-field>
                <v-row class="d-flext justify-start">
                  <v-col class="indigo">
                    <v-btn class="ma-2" color="primary" @click="contador++"
                      >+</v-btn
                    >
                    <v-btn color="red" @click="contador--">-</v-btn>

                    <div>
                      <h3>{{ contador }}</h3>
                      <v-progress-linear
                        v-model="contador"
                        height="25"
                        :class="color"
                      >
                        <strong>{{ Math.ceil(contador) }}%</strong>
                      </v-progress-linear>
                    </div>
                  </v-col>
                </v-row>

                <v-col>
                  <span>{{ saludo }}</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="info"
                    v-model="saludoCambia"
                    @click="saludo = 'v-model'"
                    >Cambiar</v-btn
                  >
                </v-col>
                <v-sheet
                  :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'"
                  :rounded="$vuetify.breakpoint.xsOnly"
                >
                  ...
                </v-sheet>
                <v-banner mobile-breakpoint="1024"> ... </v-banner>
              </v-col>
            </v-col>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>
  </v-container>
</template>

<script>
//import vuetify from 'vuetufy/lib'
export default {
  name: "propiedades-computadas",

  data: () => ({
    mensaje: "Este es un mensaje de prueba!!",
    contador: 0,
    saludoCambia: "El saludo cambio por el evento del botón",
    saludo: "Hola, soy el ciclo de vida de vue.js CLI",
  }),
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // Al crear los metodos observadores y eventos, pero aun no accede al DOM.
    // Aun no se puede acceder a 'el'
    console.log("created");
  },
  beforeMount() {
    // Se ejecuta antes de insertar al Dom
    console.log("beforeMount");
  },
  mounted() {
    console.log(
      "this.$vuetify.breakpoint.width",
      this.$vuetify.breakpoint.width
    );
    // Se ejecuta al insertar el Dom
    console.log("mounted");
  },
  beforeUpdate() {
    // Al detectar un cambio
    console.log("beforeUpdate");
  },
  updated() {
    // Al realizar los cambios
    console.log("updated");
  },
  beforeDestroy() {
    // Antes de destruir la instancia
    console.log("beforeDestroy");
  },
  destroyed() {
    // Se destruye toda la instancia
    console.log("destroyed");
  },
  watch: {
    saludo: function (newValue, valueOld) {
      console.log(`newValue:${newValue}`, `valueOld:${valueOld}`);
      newValue = this.saludoCambia;
      console.log(newValue);
      return newValue;
    },
  },
  computed: {
    invertido: function () {
      return this.mensaje.split("").reverse().join("");
    },
    color: function () {
      return {
        success: this.contador < 10,
        warning: this.contador > 10 && this.contador < 20,
        error: this.contador > 20,
      };
    },
  },
};
</script>
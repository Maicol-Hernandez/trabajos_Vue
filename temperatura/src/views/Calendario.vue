<template>
  <v-container>
    <vuetify-axios />
    <menssage-dialog />
  </v-container>
</template>

<script>
import MenssageDialog from '../components/Menssage-dialog.vue';
import VuetifyAxios from "../components/Vuetify-axios.vue";

export default {
  components: { VuetifyAxios, MenssageDialog },
};
</script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingMenssage: {
      titulo: '',
      estado: false,
      color: 'secondary'


    }
  },
  mutations: {

    mostrarLoading(state, payload) {
      state.loadingMenssage.titulo = payload.titulo
      state.loadingMenssage.estado = payload.color
      state.loadingMenssage.estado = true
    },
    ocultarLoading(state) {
      state.loadingMenssage.estado = false

    }

  },
  actions: {

  },
  modules: {

  }
})

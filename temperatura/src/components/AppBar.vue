<template>
  <v-container>
    <v-app-bar app class="info">
      <v-app-bar-title>
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
        <v-btn icon>
          <v-icon> mdi-library </v-icon>
        </v-btn>
        Lista de Tareas
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="success mr-2">
        Ingreso
        <v-icon class="ml-2"> mdi-open-in-app </v-icon>
      </v-btn>
      <v-btn class="error">
        Salir <v-icon class="ml-2"> mdi-exit-to-app </v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid>
      <v-sheet height="400" class="overflow-hidden" style="position: relative">
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="src"> </v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> Maicol Hernandez </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.url"
            >
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-sheet>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "AppBar",
  data: () => ({
    drawer: null,
    src: "https://randomuser.me/api/portraits/men/78.jpg",
    items: [
      { icon: "mdi-view-dashboard", title: "Home", url: "/home" },
      { icon: "mdi-forum", title: "About", url: "/api-calendario" },
    ],
  }),
};
</script>
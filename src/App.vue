<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>HealthCompanionAI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch label="Theme" inset icon hide-details @click="changeTheme"></v-switch>
      <!-- <v-btn color="primary" icon @click="changeTheme">
        <v-icon>mdi-palette</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i" @click="goToPage(item)">
                <v-list-item-icon>
                  <v-icon color="primary">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>{{ item.title }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="9">
          <!-- right side container -->
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// improt outer from './router'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: () => ({
    dark: false,
    items: [
      { title: 'Chat', icon: 'mdi-chat-question', route: '/chatPage' },
      { title: 'Plan', icon: 'mdi-calendar-heart', route: '/planPage' },
      { title: 'Connect', icon: 'mdi-handshake', route: '/connectPage' },
      { title: 'Profile', icon: 'mdi-account', route: '/profilePage' },
      { title: 'Settings', icon: 'mdi-cog', route: '/settingPage' },
    ]
  }),
  methods: {
    changeTheme() {
      this.dark = !this.dark
      this.$vuetify.theme.dark = this.dark
    },
    goToPage(item) {
      this.$router.push(item.route, () => { });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

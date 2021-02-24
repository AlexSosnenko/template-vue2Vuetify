<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('toggle')"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      label="Dark Theme"
      persistent-hint
      class="mt-5"
    ></v-switch>
    <v-btn icon @click="search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon title="Выйти" @click="exit">
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  emits: ['toggle'],
  methods: {
    exit() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    search() {
      alert('search')
    }
  }
}
</script>

<template>
  <v-app id="inspire">
    <app-sidebar :drawer="drawer" @hide="hideMenu"></app-sidebar>

    <app-navbar @toggle="drawerToggle"></app-navbar>

    <v-main>
      <!--  -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppSidebar from '../components/AppSidebar'
import AppNavbar from '../components/AppNavbar'
export default {
  data: () => ({ drawer: false }),
  methods: {
    drawerToggle() {
      this.drawer = !this.drawer
    },
    hideMenu() {
      this.drawer = false
    }
  },
  components: { AppSidebar, AppNavbar }
}
</script>

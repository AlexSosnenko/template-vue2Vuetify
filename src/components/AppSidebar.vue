<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        @click="hideMenu"
      >
        <v-list-item-action>
          <v-icon>mdi-{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> {{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer'],
  emits: ['hide'],
  data: () => ({
    links: [
      { title: 'Главная', url: '/', icon: 'home' },
      { title: 'Список портов', url: '/port', icon: 'airplane' }
    ]
  }),
  methods: {
    hideMenu() {
      this.$emit('hide')
    }
  }
}
</script>

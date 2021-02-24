<template>
  <div>
    <h1>
      vue2, vue-router, vuex, vuetify (<a
        href="https://vuetifyjs.com/"
        target="_blank"
        >https://vuetifyjs.com/</a
      >)
    </h1>
    <pre>{{ info }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({ info: '' }),
  mounted() {
    var json = require('../../package.json')
    this.info = json.dependencies
  }
}
</script>

<template>
  <div>
    <h1>404 - Страница не существует</h1>
    <v-row align="start" justify="start" class="mt-2">
      <v-btn depressed color="primary" class="mx-3" @click="$router.push('/')">
        На главную
      </v-btn>
      <v-btn depressed color="primary" @click="$router.push('/login')">
        Войти
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

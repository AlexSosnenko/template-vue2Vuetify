<template>
  <v-container fluid style="height: 90vh">
    <v-layout fill-height align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Авторизация</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation class="pa-5">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              :counter="6"
              :rules="passwordRules"
              label="Пароль"
              required
              @click:append="show = !show"
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'Вы должны принять условия соглашения!']"
              label="Я принимаю условия соглашения"
              required
            ></v-checkbox>

            <v-btn color="primary" class="mr-4" @click="login"> Войти </v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    show: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Введите пароль',
      (v) => (v && v.length >= 6) || 'Пароль должен быть не менее 6-ти символов'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'Введите E-mail',
      (v) => /.+@.+\..+/.test(v) || 'Введите корректный E-mail'
    ],
    checkbox: false
  }),

  methods: {
    async login() {
      if (!this.$refs.form.validate()) {
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {
        console.log('login error')
      }
    }
  }
}
</script>
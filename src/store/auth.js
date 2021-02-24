const TOKEN_KEY = 'jwt-token'
export default {
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },

  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    }
  },

  actions: {
    async login({ commit }, { email, password }) {
      //try {
      // Авторизация! API DB
      //console.log(dispatch)
      await console.log('auth login: ' + email + '/' + password)
      commit('setToken', '1234567890abcdef')
      // } catch (e) {
      //  throw e
      // }
    },
    async register() {
      // Регистрация! API DB
      await console.log('auth register')
    },
    logout({ commit }) {
      // Logout! API DB
      console.log('auth logout')
      commit('setToken', '')
    }
  },

  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(state) {
      return !!state.token // !!-привести к boolean (null - false)
    }
  }
}

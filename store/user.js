

export const state = () => ({
  auth: {
    loggedIn: false,
  }
})
const mutations = {};

const getters = {};

const actions = {
  async LOG_IN({ dispatch }, data) {
    try {
      await this.$auth.loginWith('local', { data })
        .then(() => {
          state.loggedIn = true
          this.$router.push({ path: '/' })
        })
    } catch (error) {
      console.warn(error)
    }
  },
  async LOG_OUT({ dispatch }) {
    try {
      await this.$auth.logout()
        state.loggedIn = false
        window.location.reload()
    } catch (error) {
      console.warn(error)
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};

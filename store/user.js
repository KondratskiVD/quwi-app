

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
  LOG_OUT({ dispatch }) {
    state.loggedIn = false
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};

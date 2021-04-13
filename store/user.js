const state = () => ({});
const mutations = {};
const getters = {};

const actions = {
  async USER_SIGN_IN({ dispatch }, data) {
    try {
      await this.$auth.loginWith('local', { data })
        .then(() => {
          this.$router.push({ path: '/home' })
        })
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

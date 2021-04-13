const state = () => ({
  isLoading: false
});
const mutations = {
  SET_PAGE_LOADING_STATUS(state, status = false) {
    state.isLoading = status;
  }
};
const getters = {
  getPageLoadingStatus: ({ isLoading }) => isLoading
};
const actions = {
  setPageLoadingStatus: {
    /**
     *
     * @param {ActionContext} context
     * @param {Boolean} status
     * @returns {Void} undefined
     */
    handler({ commit }, status) {
      commit('SET_PAGE_LOADING_STATUS', status);
    },
    root: true
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};

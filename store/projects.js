export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  }
}

export const actions = {
  async fetch({commit}) {
    const endpoint = '/projects-manage/index'
    const response = await this.$axios.get(endpoint)
    const projects = [...response.data.projects]
    commit('setProjects', projects)
  }
}

export const getters = {
  projects : s => s.projects
}

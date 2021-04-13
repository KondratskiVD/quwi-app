<template>
  <div class="app-todo-list">
    <div
      v-for="project in projects"
      :key="project.id"
      @click="editProject(project.id)"
      class="c-todo-list-item js-center-col">
      <div class="b-todos-content">
        <div class="b-logo" style="background-color: rgb(61, 127, 248);">
          <img  width="42px" height="42px" :src="project.logo_url" :alt="project.name">
        </div>
        <div class="b-name">
          <div class="e-name">{{ project.name }}</div>
        </div>
        <div
          v-if="project.is_active"
          class="b-name">
          <div class="e-name active-project">Active</div>
        </div>
        <div
          v-else
          class="b-name">
          <div class="e-name">Passive</div>
        </div>
        <div
          class="t-name">
          <div class="e-name">
            <table>
              <tr>
                <td>time this week</td>
                <td>00:00:00</td>
              </tr>
              <tr>
                <td>this month</td>
                <td>00:00:00</td>
              </tr>
              <tr>
                <td>total</td>
                <td>00:00:00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      projects: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const endpoint = '/projects-manage/index'
      const response = await this.$axios.get(endpoint);
      this.projects = [...response.data.projects]
    },
    editProject(id) {
      this.$router.push({ path: `/projects/${id}`, params: id })
    }
  }
}
</script>

<style scoped>
.app-todo-list {
  width: 600px;
  margin: 0 auto;
}
.c-todo-list-item {
  width: 100%;
  align-items: center;
  position: relative;
  margin: 50px auto 25px;
}
.c-todo-list-item .b-todos-content {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dedede;
  padding: 25px;
  cursor: pointer;
  font-size: .9em;
  height: 90px;
}
.c-todo-list-item .b-todos-content .b-logo {
  border: none;
  width: 42px;
  height: 42px;
  color: #fff;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 25px;
}
.b-logo {
  width: 100%;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.c-todo-list-item .b-todos-content .b-name {
  flex: 2;
  font-weight: 700;
  overflow: hidden;
}
.c-todo-list-item .b-todos-content .t-name {
  font-weight: 700;
  overflow: hidden;
  line-height: 1.5;
}
.c-todo-list-item .b-todos-content .b-name .e-name {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
}
.active-project {
  color: #368916;
}
table > tr > td {
  padding-right: 20px;
}
</style>

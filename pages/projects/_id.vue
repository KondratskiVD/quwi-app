<template>
  <div class="app-todo-page">
    <div v-if="isLoadedData" class="b-todo-active">
      <div class="b-todo-row m-first-row">
        <div>
          Name
        </div>
        <div data-error="" class="b-input">
          <input
            type="text"
            autofocus="autofocus"
            maxlength="255"
            :value="project.name"
            class="e-input">
        </div>
        <div class="btn b-button" style="width: 54.3125px;">
          <span class="e-text">OK</span>
        </div>
      </div>
      <div class="b-todo-row">
        <div class="c-todo-item">
          <div class="b-todo-item-controller">
            <div id="601" tabindex="0" class="b-todo-checkbox"><span class="b-icon"><i
              class="bu-check-empty"></i></span></div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else/>
  </div>
</template>

<script>
import Loader from '../../components/Loader.vue'

export default {
  middleware: 'auth',
  name: "project",
  components: {
    Loader
  },
    data() {
    return {
      isLoadedData: false,
      project: null,
      dataLoaded: false
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const currentProject = this.$route.params.id
        const response = await this.$axios.get(`/projects-manage/${currentProject}`)
        this.project = response.data.project
        this.isLoadedData = true
      } catch (e) {

      }

    },
  }
}
</script>

<style scoped>
.app-todo-page {
  min-width: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.app-todo-page .b-todo-active, .app-todo-page .b-todo-done {
  background: #fff;
  border: 1px solid #dedede;
  border-radius: 3px;
  width: 770px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 25px 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.app-todo-page .b-todo-active .b-todo-row.m-first-row, .app-todo-page .b-todo-done .b-todo-row.m-first-row {
  height: 42px;
  margin-bottom: 20px;
}
.app-todo-page .b-todo-active .b-todo-row, .app-todo-page .b-todo-done .b-todo-row {
  display: flex;
  align-items: center;
  width: 100%;
}
.app-todo-page .b-todo-active .b-input .e-input, .app-todo-page .b-todo-done .b-input .e-input {
  width: 300px;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  padding: 9px;
  border: 1px solid #dadada;
  border-radius: 2px;
}
</style>


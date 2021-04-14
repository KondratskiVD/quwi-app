<template>
  <div>
    <div class="app-projects-edit">
      <div v-if="isLoadedData" class="b-page-content">
        <div @click="goBack" class="b-back">
          <span class="e-arrow">&lt;</span>
          <span class="e-name">Back</span>
        </div>
        <div class="b-edit-project js-center-col">
          <form class="app-form b-project">
            <div class="b-column">
              <div class="b-row b-row--header">
                <div class="b-name">
                  <div
                    v-if="!showEditName"
                    class="b-name--inner b-name--inner-title">
                    <span class="e-name">
                      {{ project.name }}
                    </span>
                    <div
                      @click="showEditName = true"
                      class="pencil">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="z-index: 100">
                        <path
                          d="M15.4042 3.28224L12.6642 0.542241C12.3066 0.206336 11.838 0.0135995 11.3475 0.000692758C10.8571 -0.012214 10.379 0.15561 10.0042 0.472241L1.0042 9.47224C0.680969 9.79821 0.479707 10.2254 0.434203 10.6822L0.00420295 14.8522C-0.00926809 14.9987 0.00973728 15.1463 0.0598642 15.2846C0.109991 15.4229 0.190005 15.5484 0.294203 15.6522C0.387643 15.7449 0.498459 15.8182 0.620297 15.868C0.742134 15.9178 0.872596 15.943 1.0042 15.9422H1.0942L5.2642 15.5622C5.721 15.5167 6.14824 15.3155 6.4742 14.9922L15.4742 5.99224C15.8235 5.62321 16.0123 5.13075 15.9992 4.62278C15.9861 4.1148 15.7721 3.63275 15.4042 3.28224ZM12.0042 6.62224L9.3242 3.94224L11.2742 1.94224L14.0042 4.67224L12.0042 6.62224Z"
                          fill="#888">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div v-if="showEditName" class="b-name--inner">
                    <input
                      class="js-input"
                      v-model="project.name"
                      @change=""
                      type="text">
                    <div class="btn" @click="saveName">Save</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="b-column">
              <div class="b-avatar-container">
                <div data-uid="697" class="e-upload" title="Click to upload a new logo">
                  <div class="b-avatar">
                    <img width="80" height="80" :src="project.logo_url">
                  </div>
                  <i title="Remove logo" class="bu-trash-empty e-remove"></i>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Loader v-else/>
    </div>
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
      showEditName: false
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
        this.project = this.transformProject(response.data.project)
        this.isLoadedData = true
      } catch (e) {
        this.$toast.error(e)
        this.isLoadedData = true
      }
    },
    saveName() {
      const currentProject = this.$route.params.id
      const data = {name: this.project.name }
      this.$axios.post('/projects-manage/update', data, { params: {id: currentProject}})
      .then(() => {
        this.showEditName = false
        this.$toast.success('Name changed')
      })
      .catch((error) => {
        this.$toast.error(error)
      })
    },
    transformProject(project) {
      return {
        name: project.name ?? 'No name',
        logo_url: project.logo_url ?? '',
        id: project.id ?? 0
      }
    },
    goBack() {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.app-projects-edit {
  padding-top: 40px;
}
.app-projects-edit .b-page-content {
  padding: 25px 0;
  width: 615px;
  margin: auto;
  position: relative;
}
.b-edit-project .b-project .b-row .b-name .e-name {
  font-family: Google Sans;
  font-size: 24px;
  line-height: 31px;
  color: #c44512;
  background-color: transparent;
  min-width: 25px;
  max-width: 314px;
  margin-right: 10px;
}
.b-page-content .b-back:hover {
  background: #ececec;
  cursor: pointer;
  text-decoration: none;
}
.b-edit-project .b-project .b-row .b-name .e-name, .b-edit-project .b-project .b-row .b-name input {
  font-style: normal;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
}
.app-projects-edit .b-page-content .b-back {
  position: absolute;
  padding: 10px 5px;
  color: #2975dc;
  font-weight: 700;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: 0;
  left: 0;
}
.app-projects-edit .b-page-content .b-back .e-arrow {
  margin-right: 5px;
}
.app-projects-edit .b-page-content .b-back {
  position: absolute;
  padding: 10px 5px;
  color: #2975dc;
  font-weight: 700;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: -20px;
  left: 0;
}
.b-edit-project {
  position: relative;
}
.b-edit-project .b-project {
  display: grid;
  grid-template-columns: 1fr 100px;
  width: 615px;
  height: 193px;
  box-sizing: border-box;
  padding: 27px 36px;
  border-radius: 6px;
}
.app-form {
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  color: #000;
  background: #fff;
  border: 1px solid #dedede;
  border-radius: 3px;
}
.b-edit-project .b-project .b-row--header {
  margin-bottom: 28px;
}
.b-edit-project .b-project .b-avatar-container {
  cursor: pointer;
  float: right;
  position: relative;
}
.b-edit-project .b-project .b-avatar-container .e-upload {
  border-radius: 50%;
}
.e-upload {
  padding: 4px;
  cursor: pointer;
}
.b-avatar {
  position: relative;
}
.b-edit-project .b-project .b-row .b-name--inner-title {
  width: 365px;
}
.b-edit-project .b-project .b-row .b-name--inner {
  width: 352px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 31px;
  position: relative;
}
.b-edit-project .b-project .b-row .b-name .pencil {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
}
.b-edit-project .b-project .b-row .b-name .pencil:hover:after {
  transition: all .1s linear;
  transform: scaleX(1);
}
.b-edit-project .b-project .b-row .b-name .pencil:after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  border-radius: 50%;
  transition: all .2s linear;
  transform: scale3d(0,0,0);
}
.b-edit-project .b-project .b-name .b-name--inner {
  width: 352px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 31px;
  position: relative;
}
.b-name--inner .btn {
  background: #2668c1;
  height: 36px;
  width: 100px;
  text-transform: none;
  text-shadow: none;
  font-size: 12px;
  font-weight: 400;
  border-radius: 2px;
}

.b-name--inner .js-input {
  width: 300px;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  padding: 9px;
  border: 1px solid #dadada;
  border-radius: 2px;
  margin-right: 30px;
}
</style>


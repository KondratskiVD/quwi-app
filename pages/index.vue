<template>
  <div class="app-projects-index">
    <div class="b-projects">

      <div v-for="project in projects"
        :key="project.id"
        :class="{ inactive: !project.is_active }"
        @click="editProject(project.id)"
        class="b-project-box js-center-col">
        <div class="b-mover"><i class="bu-th-list"></i></div>
        <div class="b-project-content">
          <div class="b-logo">
            <div class="b-avatar">
              <img v-if="project.logo_url" width="51" height="51" :src="project.logo_url">
              <div v-else class="e-empty-avatar" style="height: 51px; width: 51px; font-size: 21px; background-color: rgb(178, 34, 34);">
                {{ project.name | capitalize }}
              </div>
            </div>
          </div>
          <div class="b-name">
            <div class="e-name">{{ project.name }}</div>
          </div>
          <div class="b-worker">
            <div v-if="project.is_active" class="b-status m-active">Active</div>
            <div v-else class="b-status">Inactive</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  async fetch({store, app}) {
    if (store.getters['projects/projects'].length === 0) {
      try {
        await store.dispatch('projects/fetch')
      } catch (e) {
        console.log( 'Server error')
      }
    }
  },
  computed: {
    projects() {
      return this.$store.getters['projects/projects']
    }
  },
  methods: {
    editProject(id) {
      this.$router.push({ path: `/projects/${id}`, params: id })
    }
  }
}
</script>

<style scoped>
.b-projects {
  margin: 15px auto 50px;
  width: 600px;
  position: relative;
}
.b-project-box {
  margin-bottom: 6px;
  width: 100%;
  align-items: center;
  position: relative;
}
.b-project-box .b-project-content:hover {
  background: #ececec;
  cursor: pointer;
  text-decoration: none;
}
.b-logo {
  width: 100%;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
table > tr > td {
  padding-right: 20px;
}
.b-avatar .e-empty-avatar {
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6495ed;
  text-transform: uppercase;
}
.b-avatar .e-empty-avatar, .b-avatar img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 50%;
}
.b-project-box .b-project-content {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dedede;
  padding: 25px;
  cursor: pointer;
  font-size: .9em;
}
.b-project-box .b-project-content .b-logo {
  border: none;
  padding: 0;
  flex: 1;
  margin-right: 25px;
  max-width: 65px;
}
.b-project-box .b-project-content .b-name {
  flex: 2;
  font-weight: 700;
  overflow: hidden;
}
.b-project-box .b-project-content .b-status {
  flex: 0 0 45px;
  display: flex;
  flex-direction: column;
  color: #777;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.b-project-box .b-project-content .b-status.m-active {
  color: green;
}
.b-project-box.inactive {
 opacity: .5;
}
</style>

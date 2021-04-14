<template>
  <nav class="app-navbar m-guest">
    <a href="/" class="app-quwi">
      <img src="~assets/images/quwi-logo.png" width="25px" height="25px">
    </a>
    <div class="b-menu">
      <div data-uid="174" class="c-language-selector b-context-menu direction-right direction-bottom">
        <a @click="logout" class="">Signup</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  methods: {
    logout() {
      this.$store.dispatch('user/LOG_OUT')
    }
  }
}
</script>

<style scoped>
.app-layout .app-navbar {
  display: flex;
}
.app-navbar {
  background: #fafafa;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  text-align: right;
  padding-right: 20px;
  height: 46px;
  position: fixed;
  width: 100%;
  z-index: 1001;
}
.app-layout .app-navbar {
  padding-right: 20px;
}
.app-quwi {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #000;
  font-weight: 700;
  font-family: Google Sans,sans-serif;
  width: 44px;
  height: 44px;
  margin-left: 13px;
  margin-right: 13px;
  margin-top: 1px;
  border-radius: 50%;
}
.b-menu {
  line-height: 46px;
  height: 46px;
  display: inline-flex;
  justify-content: flex-end;
  flex: 1;
}
.c-language-selector.b-context-menu {
  display: inline-flex;
  vertical-align: top;
}
.app-navbar .c-language-selector {
  font-size: .8em;
  color: #636363;
  height: 46px;
  text-transform: uppercase;
}
.b-context-menu {
  position: relative;
}
.b-menu a, .b-menu span.e-link {
  display: flex;
  float: left;
  align-items: center;
  text-transform: uppercase;
  font-size: .8em;
  color: #636363;
  padding: 0 15px;
  height: 46px;
  white-space: nowrap;
}
</style>

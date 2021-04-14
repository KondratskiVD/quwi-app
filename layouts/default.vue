<template>
  <div class="app-layout">
    <AppNav/>
    <nuxt id="content"/>
  </div>
</template>

<script>
import AppNav from '../components/AppNav';

export default {
  name: 'default',
  components: {
    AppNav
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
#content {
  background: #F4F4F4;
  min-height: 100%;
}
.app-layout {
  height: 100%;
}
</style>

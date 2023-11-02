<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BrowserBar from './components/BrowserBar.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="fixed-browser-panel">
      <BrowserBar />
    </div>

    <div class="fullscreen-margin-top">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.fixed-browser-panel {
  z-index: 99999999999;
  position: fixed;
  width: 100%;
}

:fullscreen .fullscreen-margin-top {
  margin-top: 89px;
}

:-ms-fullscreen .fullscreen-margin-top {
  margin-top: 89px;
}

:-webkit-full-screen .fullscreen-margin-top {
  margin-top: 89px;
}

.min-vh-100 {
  min-height: 100vh;
}
</style>
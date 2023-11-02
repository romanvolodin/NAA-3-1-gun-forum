<template>
  <div class="browser-bar">
    <div class="tabs">
      <div class="tab" :class="{ 'active-tab': tab.active }" v-for="(tab, index) in fakeBrowser.tabs" :key="index">
        <div class="tab-favicon">
          <WorldIcon v-if="tab.active" size="18" fill-color="#bcbdbe" />
          <WorldIcon v-else size="18" fill-color="#bcbdbe" />
        </div>
        <span class="tab-title">{{ tab.title }}</span>
        <span class="tab-close">✕</span>
      </div>
      <div class="spacer">
        <span class="tab-new">+</span>
      </div>
      <button class="exit-fullscreen" @click="closeFullscreen">✕</button>
    </div>
    <div class="address-bar-panel">
      <ArrowLeftIcon class="browser-bar-icon" size="22" fill-color="#bcbdbe" />
      <ArrowRightIcon class="browser-bar-icon" size="22" fill-color="#bcbdbe" />
      <ReloadIcon class="browser-bar-icon" size="20" fill-color="#f3f3f3" />
      <HomeIcon class="browser-bar-icon" size="20" fill-color="#f3f3f3" />
      <div class="address-bar">
        <LockIcon class="address-bar-icon" size="16" fill-color="#bcbdbe" />
        <input class="address-field" v-model="fakeBrowser.activeAddress" type="text" name="search" autofocus>
        <StarIcon class="address-bar-icon" size="16" fill-color="#bcbdbe" />
      </div>
      <RectangleVerticalIcon class="browser-bar-icon" size="20" fill-color="#f3f3f3" />
      <DotsVerticalIcon class="browser-bar-icon" size="20" fill-color="#f3f3f3" />
    </div>
  </div>
</template>

<style scoped>
.browser-bar {
  background-color: #202020;
  display: none;
  padding-top: 5px;
}

.tabs {
  background-color: #202020;
  display: flex;
}

.tab {
  width: 250px;
  height: 32px;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0 1px;

}

.active-tab {
  background-color: #353637;
}

.tab-favicon {
  margin: 0 7px;
}

.tab-title {
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.tab-close {
  margin: 07px;
}

.spacer {
  flex-grow: 1;
}

.tab-new {
  color: white;
  font-size: 19px;
  font-weight: 500;
  padding: 0 10px;
}

.exit-fullscreen {
  background-color: #353637;
  color: white;
  padding: 0 10px;
  border: 0;
}

:fullscreen .browser-bar {
  display: block;
}

:-ms-fullscreen .browser-bar {
  display: block;
}

:-webkit-full-screen .browser-bar {
  display: block;
}

.address-bar-panel {
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #353637;
}

.address-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50vh;
  background-color: #202020;
  flex-grow: 1;
  margin: 4px;
  height: 34px;
}

.address-field {
  font-size: 14px;
  color: #919293;
  border: none;
  flex-grow: 1;
  background-color: inherit;
}

.address-field:focus {
  outline: none;
}

.address-bar-icon {
  margin: 5px 10px;
}

.browser-bar-icon {
  margin: 5px 5px;
}
</style>

<script setup>
import LockIcon from './icons/LockIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import ReloadIcon from './icons/ReloadIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
import DotsVerticalIcon from './icons/DotsVerticalIcon.vue'
import RectangleVerticalIcon from './icons/RectangleVerticalIcon.vue'
import WorldIcon from './icons/WorldIcon.vue'

import { useFakeBrowserStore } from '@/stores/fake-browser'

const fakeBrowser = useFakeBrowserStore()

const closeFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
</script>

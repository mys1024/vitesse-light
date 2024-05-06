<script lang="ts" setup>
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
</script>

<template>
  <button mx-2 outline-none icon-btn @click="appStore.toggleDark()">
    <div i="carbon-sun dark:carbon-moon" />
  </button>
</template>

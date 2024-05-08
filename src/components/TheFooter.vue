<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '~/stores/app'

const { t } = useI18n()

const appStore = useAppStore()
</script>

<template>
  <footer flex justify-center gap-4 text-xl>
    <button mx-2 outline-none icon-btn @click="appStore.toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
    <a icon-btn :title="t('toggle_langs')" @click="appStore.toggleLocales()">
      <div i-carbon-language />
    </a>
    <a icon-btn rel="noreferrer" href="https://github.com/mys1024/vitesse-light" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </footer>
</template>

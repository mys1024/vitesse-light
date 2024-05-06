<script lang="ts" setup>
import ThemeSwitch from '~/components/ThemeSwitch.vue'
</script>

<template>
  <div p-16 text-center>
    <div i-carbon-campsite inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/mys1024/vitesse-light" target="_blank">
        Vitesse Light
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Lightweight Vitesse</em>
    </p>
    <div py-4 />
    <ThemeSwitch />
  </div>
</template>

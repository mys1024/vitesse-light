import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

import App from './App.vue'
import routes from '~pages'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles.less'

const app = createApp(App)

// router
app.use(createRouter({
  history: createWebHistory(),
  routes,
}))

// pinia
app.use(createPinia())

// i18n
app.use(createI18n({
  legacy: false,
  locale: 'en',
  messages,
}))

// mount
app.mount('#app')

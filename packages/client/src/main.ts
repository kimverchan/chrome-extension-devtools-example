import type { App as VueApp } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

let vueApp: VueApp = null!
export function initDevTools() {
  const app = createApp(App)
  vueApp = app
  app.mount('#app')
}

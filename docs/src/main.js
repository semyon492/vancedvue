import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "./plugins/i18n.js";
import './assets/main.css'

import VancedVue from '../../src'

createApp(App)
.use(router)
.use(i18n)
.use(VancedVue)
.mount('#app')

const DEFAULT_TITLE = import.meta.env.VITE_APP_NAME;

router.afterEach((to) => {
    document.title = to.meta?.title
      ? `${to.meta.title} — ${DEFAULT_TITLE}`
      : DEFAULT_TITLE
  })
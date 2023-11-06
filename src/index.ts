import { App } from 'vue'
import * as components from './components'

function install (app: App) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key])
  }
}

import './assets/main.scss'
// import './assets/base.css'

export default { install }

export * from './components'
export * from './constants'
export * from './utils'

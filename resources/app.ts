import './assets/app.css'

import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, DefineComponent, h } from 'vue'
import { ZiggyVue } from '../vendor/tightenco/ziggy/src/js'

import Default from './layouts/default.vue'
import Guest from './layouts/guest.vue'

const appName = import.meta.env.VITE_APP_NAME

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) => {
    const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue', {
      eager: true,
    })
    let page = pages[`./pages/${name}.vue`]
    page.default.layout = name.startsWith('auth/') ? Guest : Default
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})

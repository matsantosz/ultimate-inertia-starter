import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, DefineComponent, h } from 'vue'
import { ZiggyVue } from '../vendor/tightenco/ziggy/src/js'

import Default from './layouts/default.vue'
import Guest from './layouts/guest.vue'

const appName = import.meta.env.VITE_APP_NAME

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
      const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue')
      let page = await pages[`./pages/${name}.vue`]()
      page.default.layout = name.startsWith('auth/') ? Guest : Default
      return page
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue, {
          // @ts-ignore
          ...page.props.ziggy,
          // @ts-ignore
          location: new URL(page.props.ziggy.location),
        })
    },
  }),
)

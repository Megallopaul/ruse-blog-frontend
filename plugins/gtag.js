import { defineNuxtPlugin } from "@nuxt/bridge/dist/runtime"

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-82XWSVMK1K'
    }
  })
})

import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    appName: 'Ruse',
    isEnabled: true,
    property: {
      id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
      anonymize_ip: true
    }
  })
})
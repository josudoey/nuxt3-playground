// ref https://nuxt.com/docs/getting-started/error-handling
import { consola } from 'consola'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    consola.error(error)
  }

  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    consola.error(error)
  })
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["nuxt-auth-utils"],
  runtimeConfig: {
    redis: {
      port: 6379,
      host: "127.0.0.1",
    },
  },
});

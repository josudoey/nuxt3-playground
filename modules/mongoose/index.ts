import mongoose from 'mongoose'
import defu from 'defu'
import {
  addServerPlugin,
  createResolver,
  defineNuxtModule,
  logger
} from '@nuxt/kit'

// ref https://github.com/arashsheyda/nuxt-mongoose/blob/main/src/module.ts
export default defineNuxtModule({
  meta: {
    name: 'mongoose',
    configKey: 'mongoose'
  },
  defaults: {
    uri: process.env.MONGODB_URI,
    options: {}
  },
  async setup(options, nuxt) {
    if (!options.uri) {
      logger.warn('Missing MongoDB URI. You can set it in your `nuxt.config` or in your `.env` as `MONGODB_URI`')
    }

    const { resolve } = createResolver(import.meta.url)
    const runtimeConfig = nuxt.options.runtimeConfig as any
    runtimeConfig.mongoose = defu(runtimeConfig.mongoose || {}, {
      uri: options.uri,
      options: options.options
    })

    addServerPlugin(resolve('./server-plugins/connect'))
    logger.success('`mongoose` is ready!')
  },
  hooks: {
    async close() {
      await mongoose.disconnect()
    }
  }
})

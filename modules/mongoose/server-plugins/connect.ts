import { useRuntimeConfig } from '#imports'
import mongoose from 'mongoose'
import { consola } from 'consola'

async function mongooseConnect(): Promise<void> {
  const config = useRuntimeConfig().mongoose
  try {
    await mongoose.connect(config.uri, { ...config.options })
    consola.success('Connected to MongoDB')
  } catch (err) {
    consola.error(`Error connecting to MongoDB: ${err}`)
  }
}

export default defineNitroPlugin(() => {
  mongooseConnect().catch(consola.error)
})

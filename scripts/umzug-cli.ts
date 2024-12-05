import dotenv from 'dotenv'
import { consola } from 'consola'
import mongoose from 'mongoose'
import { createMigrator } from '../migrator'

await (async function () {
  dotenv.config()
  const mongoUrl = process.env.MONGODB_URI || ''
  await mongoose.connect(mongoUrl)
  consola.success('Connected to MongoDB')
  const { connection } = mongoose
  const umzug = createMigrator({ connection })
  await umzug.runAsCLI()
  await connection.close()
  consola.success('Closed to MongoDB')
})()

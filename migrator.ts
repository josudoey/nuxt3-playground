import { Umzug, MongoDBStorage } from 'umzug'
import type { Connection } from 'mongoose'
import path from 'path'
import { consola } from 'consola'

interface MigratorContext {
  connection: Connection
}

export function createMigrator({ connection }: MigratorContext): Umzug<MigratorContext> {
    const cwd = path.dirname(import.meta.url.replace('file://', ''))

  return new Umzug({
    migrations: {
      glob: ['migrations/*.ts', {
        cwd
      }]
    },
    context(): MigratorContext { return { connection } },
    storage: new MongoDBStorage({ connection }),
    logger: consola
  })
}

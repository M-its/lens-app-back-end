import setupKnex, { Knex } from 'knex'
import { env } from './env'
import path from 'node:path'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined')
}

export const config: Knex.Config = {
  client: process.env.DATABASE_CLIENT ?? 'sqlite3',
  connection:
    (process.env.DATABASE_CLIENT ?? 'sqlite3') === 'sqlite3'
      ? {
          filename: path.resolve(process.cwd(), env.DATABASE_URL),
        }
      : { connectionString: env.DATABASE_URL, ssl: { rejectUnauthorized: false } },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './src/db/migrations',
  },
}
export const knex = setupKnex(config)

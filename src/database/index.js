import knex from 'knex'
import knexConfig from '../../knexfile.js'

const environment = process.env.DATABASE_ENV || 'development'

const database = knex(knexConfig[environment])

export {database}
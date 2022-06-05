import * as mongoose from 'mongoose'
import { envVars } from './vars'

const dbname = process.env.DB_NAME || 'caduceus'

const dbOptions = envVars.USE_CLOUD_DB
  ? {
      pass: envVars.DB_PASS,
      user: envVars.DB_USER
    }
  : {}

const databaseUrl = envVars.USE_CLOUD_DB ? envVars.DB_URL : 'mongodb://localhost:27017'

const databaseName = envVars.DB_NAME

mongoose.connect(databaseUrl + '/' + dbname, dbOptions, (err) => {
  /* eslint-disable */
    if (err) console.log('Error connecting to database.')
    else console.log(`Server connected to ${databaseName}.`)
    /* eslint-enable */
})

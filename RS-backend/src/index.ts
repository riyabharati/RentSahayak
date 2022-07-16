import { allRouter } from './app.route'
import { app } from './config'
import { makeErrorObject } from './utils'
import { commonResponse, responseCode } from './utils/constants'

app.use('/api', allRouter)

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('Error: ', err)
  res.status(err.status || responseCode.INTERNAL_SERVER).send(makeErrorObject(err.message || commonResponse.error.INTERNAL_SERVER))
})

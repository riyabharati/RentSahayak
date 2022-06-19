import * as express from 'express'
import { envVars } from './vars'
import * as cors from 'cors'
import * as path from 'path'
import { FILE_PATH } from '../utils/constants'

const server = express()

const PORT = envVars.PORT

server.use(cors())

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

// Loading Files
server.use(express.static('files'))
server.use('/file', express.static(path.join(process.cwd(), `${FILE_PATH}`)))
server.use('/fallbackFiles', express.static(path.join(process.cwd(), `/src/staticImages/fallback`)))
server.use('/bannerImages', express.static(path.join(process.cwd(), '/src/staticImages/banner')))

server.listen(PORT, (err) => {
  /* eslint-disable */
  if (err) {
    console.log('Error listening to server.')
  } else {
    console.log('Server listening at port ' + PORT)
  }
  /* eslint-enable */
})

export { server as app }

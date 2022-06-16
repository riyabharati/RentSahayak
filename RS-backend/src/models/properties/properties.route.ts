import { Router } from 'express'
import { houseRouter } from './house'

const router = Router()

router.use('/house', houseRouter)

export { router as propertyRouter }

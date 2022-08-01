import { Router } from 'express'

import { bookingRouter, categoryRouter, propertyRouter, userRouter } from './models'

import { authenticator } from './middleware/authenticator'

const router = Router()

// UNSECURE
router.use('/user', userRouter)

// SECURE
router.use(authenticator)
router.use('/category', categoryRouter)
router.use('/property', propertyRouter)
router.use('/booking', bookingRouter)

export { router as allRouter }

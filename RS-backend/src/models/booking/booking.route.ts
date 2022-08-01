import { Router } from 'express'
import {
  conCreateNewBooking,
  conFetchAllBookingsOfUser,
  conFetchBookingById,
  conUpdateBookingStatus,
  conUpdateConversation
} from './booking.controller'

const router = Router()

router.get('/', conFetchAllBookingsOfUser)

router.post('/new', conCreateNewBooking)

router.put('/status', conUpdateBookingStatus)

router.route('/:id')
  .get(conFetchBookingById)
  .put(conUpdateConversation)

export { router as bookingRouter }

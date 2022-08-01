import {
  fetchAllBookingsOfRenter,
  fetchAllBookingsOfTenant,
  fetchBookingById,
  insertBooking,
  updateBookingStatus, updateConversation
} from './booking.query'
import { BookingStatus, FieldTypeBookingCreate, FieldTypeBookingMain, FieldTypeConversation } from './booking.types'
import { makeSuccessObject } from '../../utils'
import { bookingResponse, commonResponse, responseCode } from '../../utils/constants'
import { FieldTypeUserJWT, UserCategory } from '../user/user.types'

const conFetchAllBookingsOfUser = async (req, res, next) => {
  const { userId, category } = req.loggedInUser as FieldTypeUserJWT
  try {
    const bookingList = category === UserCategory.TENANT
      ? await fetchAllBookingsOfTenant(userId)
      : await fetchAllBookingsOfRenter(userId)
    res.status(bookingList && bookingList.length > 0 ? responseCode.OK : responseCode.OK)
      .send(makeSuccessObject<FieldTypeBookingMain[]>(bookingList, bookingResponse.success.FETCH_ALL))
  } catch (_err) {
    next({ message: bookingResponse.error.FETCH_ALL, status: responseCode.BAD_REQUEST })
  }
}

const conFetchBookingById = async (req, res, next) => {
  const id = req.params.id

  try {
    const booking = await fetchBookingById(id)
    res.status(booking ? responseCode.OK : responseCode.OK)
      .send(makeSuccessObject<FieldTypeBookingMain>(booking, bookingResponse.success.FETCH_BY_ID))
  } catch (_err) {
    next({ message: bookingResponse.error.FETCH_BY_ID, status: responseCode.BAD_REQUEST })
  }
}

const conCreateNewBooking = (req, res, next) => {
  const { userId } = req.loggedInUser as FieldTypeUserJWT
  const reqBody = req.body as FieldTypeBookingCreate
  if (!reqBody || !reqBody.propertyId || !reqBody.message) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.NOT_ACCEPTABLE })
  }

  insertBooking({ ...reqBody, tenantId: userId })
    .then((booking) => {
      res.status(responseCode.CREATED).send(makeSuccessObject<FieldTypeBookingMain>(booking, bookingResponse.success.INSERT))
    })
    .catch(() => {
      next({ message: bookingResponse.error.INSERT, status: responseCode.BAD_REQUEST })
    })
}

const conUpdateBookingStatus = (req, res, next) => {
  const { category } = req.loggedInUser as FieldTypeUserJWT

  if (!req.body || !req.params.id || !req.body.status) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.NOT_ACCEPTABLE })
  }
  fetchBookingById(req.params.id)
    .then(booking => {
      if (!booking) {
        return next({ message: bookingResponse.error.FETCH_BY_ID, status: responseCode.BAD_REQUEST })
      }
      if (booking.status !== BookingStatus.PENDING) {
        return next({ message: bookingResponse.error.INVALID_STATUS, status: responseCode.BAD_REQUEST })
      }

      if (category === UserCategory.TENANT && req.body.status !== BookingStatus.CANCELED) {
        return next({ message: commonResponse.error.UNAUTHORIZED_ACCESS, status: responseCode.BAD_REQUEST })
      }

      if (category === UserCategory.RENTER && (req.body.status !== BookingStatus.DECLINED || req.body.status !== BookingStatus.ACCEPTED)) {
        return next({ message: commonResponse.error.UNAUTHORIZED_ACCESS, status: responseCode.BAD_REQUEST })
      }
      updateBookingStatus(req.params.id, req.body.status)
        .then((booking) => {
          res.status(responseCode.ACCEPTED).send(makeSuccessObject<FieldTypeBookingMain>(booking, bookingResponse.success.STATUS))
        })
        .catch(() => {
          next({ message: bookingResponse.error.STATUS, status: responseCode.BAD_REQUEST })
        })
    })
    .catch((_err) => {
      next({ message: bookingResponse.error.STATUS, status: responseCode.BAD_REQUEST })
    })
}

const conUpdateConversation = (req, res, next) => {
  const { userId } = req.loggedInUser as FieldTypeUserJWT

  if (!req.body || !req.params.id || !req.body.message) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.NOT_ACCEPTABLE })
  }

  const { message, ...remainingBody } = req.body

  const newConversation: FieldTypeConversation = {
    date: Date.now(),
    message,
    userId
  }

  updateConversation(req.params.id, { conversation: newConversation, ...remainingBody })
    .then((booking) => {
      res.status(responseCode.ACCEPTED).send(makeSuccessObject<FieldTypeBookingMain>(booking, bookingResponse.success.UPDATE))
    })
    .catch(() => {
      next({ message: bookingResponse.error.UPDATE, status: responseCode.BAD_REQUEST })
    })
}

export {
  conFetchAllBookingsOfUser,
  conUpdateBookingStatus,
  conUpdateConversation,
  conFetchBookingById,
  conCreateNewBooking
}

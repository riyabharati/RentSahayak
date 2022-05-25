import {
  BookingStatus,
  FieldTypeBookingCreate,
  FieldTypeBookingUpdates
} from './booking.types'
import { BookingModel } from './bookingModel'
import { ObjectId } from 'mongoose'
import { HouseModel } from '../properties/house/houseModel/house.model'

const bookingProjection = {
  conversation: 1,
  modifiedAt: 1,
  propertyId: 1,
  quotedPrice: 1,
  redefinedPrice: 1,
  status: 1,
  tenantId: 1
}

const fetchAllBookingsOfTenant = (userId: ObjectId) => {
  return BookingModel.find({ tenantId: userId }, { ...bookingProjection }, { populate: ['propertyId', 'conversation.userId'] })
}

const fetchAllBookingsOfRenter = async (userId: ObjectId) => {
  const houseList = await HouseModel.find({ userId })

  if (houseList.length > 0) {
    return BookingModel.find({ propertyId: { $in: houseList.map(house => house._id) } }, { ...bookingProjection }, { populate: ['propertyId', 'conversation.userId'] })
  }

  return []
}

const fetchBookingById = (id: ObjectId) => {
  return BookingModel.findOne({ _id: id }, { ...bookingProjection }, { populate: ['propertyId', 'conversation.userId'] })
}

const insertBooking = async (data: FieldTypeBookingCreate) => {
  const updatedData = {
    ...data,
    conversation: [{
      date: Date.now(),
      message: data.message,
      userId: data.tenantId
    }]
  }
  const newBooking = new BookingModel(updatedData)

  const res = await newBooking.save({ validateBeforeSave: true })

  return BookingModel.findOne({ _id: res._id }, { ...bookingProjection }, { populate: ['propertyId', 'conversation.userId'] })
}

const updateBookingStatus = (id: ObjectId, status: BookingStatus) => {
  return BookingModel.findByIdAndUpdate(id, { $set: { status } }, { populate: ['propertyId', 'conversation.userId'], projection: { ...bookingProjection }, returnDocument: 'after', returnOriginal: false })
}

const updateConversation = (id: ObjectId, data: FieldTypeBookingUpdates) => {
  const { conversation, ...remainingData } = data

  return BookingModel.findByIdAndUpdate(id, { $push: { conversation }, $set: remainingData }, { populate: ['propertyId'], projection: { ...bookingProjection }, returnDocument: 'after', returnOriginal: false })
}

const countBooking = () => {
  return BookingModel.count()
}

export {
  fetchAllBookingsOfRenter,
  fetchAllBookingsOfTenant,
  updateBookingStatus,
  updateConversation,
  fetchBookingById,
  insertBooking,
  countBooking
}

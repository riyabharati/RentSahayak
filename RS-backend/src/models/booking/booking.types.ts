import { ObjectId } from 'mongoose'

enum BookingStatus {
  PENDING= 'pending',
  DECLINED= 'declined',
  ACCEPTED= 'accepted',
  CANCELED= 'canceled'
}

interface FieldTypeConversation {
  userId: ObjectId,
  date: number,
  message: string
}

interface FieldTypeBookingCreate {
  tenantId: ObjectId,
  propertyId: ObjectId,
  quotedPrice?: number,
  message: string
}

interface FieldTypeBookingMain {
  _id: ObjectId,
  propertyId: ObjectId,
  tenantId: ObjectId,
  conversation: FieldTypeConversation[],
  quotedPrice: number,
  redefinedPrice: number,
  status: BookingStatus
  createdAt: Date,
  modifiedAt: Date,
}

interface FieldTypeBookingUpdates {
  conversation: FieldTypeConversation,
  quotedPrice?: number,
  redefinedPrice?: number,
}

export {
  BookingStatus,
  FieldTypeConversation,
  FieldTypeBookingCreate,
  FieldTypeBookingMain,
  FieldTypeBookingUpdates
}

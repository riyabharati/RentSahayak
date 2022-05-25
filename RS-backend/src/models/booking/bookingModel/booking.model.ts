import { Model, Schema, model } from 'mongoose'
import { BookingStatus, FieldTypeBookingMain } from '../booking.types'
import { collectionNames } from '../../../config'

const bookingSchema = new Schema<FieldTypeBookingMain>({
  conversation: [
    {
      date: { type: Number },
      message: { required: true, type: String },
      userId: {
        ref: collectionNames.USER,
        required: true,
        type: Schema.Types.ObjectId
      }
    }
  ],
  propertyId: {
    ref: collectionNames.HOUSE,
    required: true,
    type: Schema.Types.ObjectId
  },
  quotedPrice: { type: Number },
  redefinedPrice: { type: Number },
  status: {
    default: BookingStatus.PENDING,
    enum: [BookingStatus.ACCEPTED, BookingStatus.PENDING, BookingStatus.DECLINED, BookingStatus.CANCELED],
    type: String
  },
  tenantId: {
    ref: collectionNames.USER,
    required: true,
    type: Schema.Types.ObjectId
  }

}, { strict: true, timestamps: { createdAt: true, updatedAt: 'modifiedAt' } })

const BookingModel: Model<FieldTypeBookingMain> = model(collectionNames.BOOKING, bookingSchema)

export { BookingModel }

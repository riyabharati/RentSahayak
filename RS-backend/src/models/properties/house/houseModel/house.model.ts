import { Model, Schema, model } from 'mongoose'
import { FieldTypeHouseMain, HouseFurnishing } from '../house.types'
import { collectionNames } from '../../../../config'

const houseSchema = new Schema<FieldTypeHouseMain>({
  deleted: {
    default: false,
    type: Boolean
  },
  description: {
    type: String
  },
  features: {
    areaSqFeet: { type: Number },
    bathroom: { type: Number },
    bedroom: { type: Number },
    floors: { type: Number },
    furnishing: {
      enum: [HouseFurnishing.NON, HouseFurnishing.SEMI, HouseFurnishing.FULL],
      type: String
    },
    parkingSpace: { type: String },
    roadSize: { type: String },
    roadType: { type: String }
  },
  images: {
    type: [String]
  },
  price: { required: true, type: Number },
  reviews: [{}],
  title: { required: true, type: String },
  userId: {
    ref: collectionNames.USER,
    required: true,
    type: Schema.Types.ObjectId
  },
  views: {
    default: 0,
    type: Number
  }
}, { strict: true, timestamps: { createdAt: true, updatedAt: 'modifiedAt' } })

const HouseModel: Model<FieldTypeHouseMain> = model(collectionNames.HOUSE, houseSchema)

export { HouseModel }

import { Model, Schema, model } from 'mongoose'
import { FieldTypeUserMain, UserAccountStatus, UserCategory, UserGender, UserOperations } from '../user.types'
import { collectionNames } from '../../../config'

const userSchema = new Schema<FieldTypeUserMain>({
  accountStatus: {
    default: UserAccountStatus.ACTIVE,
    enum: [UserAccountStatus.ACTIVE, UserAccountStatus.DE_ACTIVE],
    type: String
  },
  category: {
    enum: [UserCategory.TENANT, UserCategory.RENTER, UserCategory.ADMIN],
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  image: {
    type: String
  },
  isVerified: {
    default: false,
    type: Boolean
  },
  operation: {
    enum: [UserOperations.DEACTIVATION, UserOperations.FORGOT_PASSWORD, UserOperations.RESET_PASSWORD, UserOperations.REACTIVATION, UserOperations.REGISTER],
    type: String
  },
  otpCode: {
    type: String
  },
  otpExpiry: {
    type: Date
  },
  password: {
    required: true,
    type: String
  },
  profile: {
    address: {
      type: String
    },
    fullName: {
      type: String
    },
    gender: { enum: [UserGender.MALE, UserGender.FEMALE, UserGender.OTHERS], type: String },
    phone: {
      type: String
    },
    publicAddress: { default: false, type: Boolean },
    publicPhone: { default: false, type: Boolean }
  }
}, { strict: true, timestamps: { createdAt: true, updatedAt: 'modifiedAt' } })

const UserModel: Model<FieldTypeUserMain> = model(collectionNames.USER, userSchema)

export { UserModel }

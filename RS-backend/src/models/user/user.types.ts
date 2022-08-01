import { ObjectId } from 'mongoose'

enum UserCategory {
  ADMIN='ADMIN',
  RENTER='RENTER',
  TENANT='TENANT'
}

enum UserGender {
  MALE='MALE',
  FEMALE='FEMALE',
  OTHERS='OTHERS',
}

enum UserAccountStatus {
  ACTIVE='ACTIVE',
  DE_ACTIVE='DE_ACTIVE'
}

enum UserOperations {
  REGISTER='REGISTER',
  FORGOT_PASSWORD='FORGOT_PASSWORD',
  RESET_PASSWORD='RESET_PASSWORD',
  DEACTIVATION='DEACTIVATION',
  REACTIVATION='REACTIVATION',
}

interface FieldTypeUserProfile {
  fullName: string,
  gender: UserGender
  address: string,
  phone: number
  publicAddress: boolean
  publicPhone: boolean
}

interface FieldTypeUser {
  password: string,
  email: string,
  category: UserCategory
  accountStatus: UserAccountStatus,
  profile: FieldTypeUserProfile,
  isVerified: boolean
  image?: string,
}

interface FieldTypeUserMain extends FieldTypeUser {
  _id: ObjectId,
  createdAt: Date,
  modifiedAt: Date,
  operation: UserOperations,
  otpCode: string,
  otpExpiry: Date,
}

interface FieldTypeUserJWT {
  userId: ObjectId,
  email: string,
  category: UserCategory,
  accountStatus: UserAccountStatus
}

interface FieldTypeUserLogin {
  email: string,
  password: string
}

interface FieldTypeUserRegister extends FieldTypeUserLogin{
  category: UserCategory,
  fullName: string,
  otpCode: string,
  otpExpiry: Date,
  operation: UserOperations.REGISTER
}

interface FieldTypeUserCredential {
  _id: ObjectId,
  accountStatus: UserAccountStatus,
  category: UserCategory
  email: string,
  profile: FieldTypeUserProfile
}

interface FieldTypeUserValidStatus {
  isActive: boolean,
  isInSystem: boolean
}

interface FieldTypeOTP {
  otpCode: string,
  otpExpiry: Date,
}

export {
  FieldTypeUser,
  FieldTypeUserProfile,
  FieldTypeUserMain,
  FieldTypeUserJWT,
  FieldTypeUserRegister,
  FieldTypeUserLogin,
  FieldTypeUserCredential,
  FieldTypeUserValidStatus,
  FieldTypeOTP,
  UserCategory,
  UserOperations,
  UserAccountStatus,
  UserGender
}

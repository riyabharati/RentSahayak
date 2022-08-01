import { FunctionWithNoParamButReturn, FunctionWithParamAndReturn } from './types'
import { FieldTypeOTP } from '../models/user/user.types'
import { OTP_EXPIRY_REGISTER } from './constants'

const generateDisplayEmail:FunctionWithParamAndReturn<string, string> = username => {
  const atIndex = username.indexOf('@')
  
  return `${username.slice(0, 3)}****${username.slice(atIndex)}`
}
const generateOTPCode:FunctionWithNoParamButReturn<FieldTypeOTP> = () => {
  const randomNumber = Math.random().toString()
  const otpCode = randomNumber.slice(randomNumber.length - 6, randomNumber.length)
  const otpExpiry = new Date(Date.now() + OTP_EXPIRY_REGISTER)
  
  return {
    otpCode,
    otpExpiry
  }
}

export {
  generateDisplayEmail,
  generateOTPCode,
}

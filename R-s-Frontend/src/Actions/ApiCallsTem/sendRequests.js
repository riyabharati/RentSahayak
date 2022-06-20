import { AxiosResponse } from 'axios'

import sendRequest from './sendRequest'


import { apiEndPoints } from './ApiConstants'

const apiAuthGetUser = () => {
  return sendRequest('GET', apiEndPoints.auth.getUser, true )
}

const apiAuthSignIn = loginData => {
  return sendRequest('POST', apiEndPoints.auth.login, false, loginData )
}

const apiAuthRegister= registerData => {
  return sendRequest('POST', apiEndPoints.auth.register, false, registerData )
}

const apiAuthForgotPassword = forgotPasswordData => {
  return sendRequest('POST', apiEndPoints.auth.forgotPassword, false, forgotPasswordData )
}

const apiAuthVerifyOtpCode = verifyOtpData => {
  return sendRequest('POST', apiEndPoints.auth.verifyUser, false, verifyOtpData )
}

const apiAuthResetPassword = resetPasswordData => {
  return sendRequest('PUT', apiEndPoints.auth.resetPassword, false, resetPasswordData )
}

const apiAuthChangePassword = changePasswordData => {
  return sendRequest('PUT', apiEndPoints.auth.changePassword, true, changePasswordData )
}

const apiAuthResendOtp= resendOtpData => {
  return sendRequest('PUT', apiEndPoints.auth.resendOtp, false, resendOtpData )
}

export { apiAuthGetUser, apiAuthSignIn, apiAuthForgotPassword, apiAuthChangePassword, apiAuthResetPassword, apiAuthVerifyOtpCode, apiAuthResendOtp, apiAuthRegister }

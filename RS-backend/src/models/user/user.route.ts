import { Router } from 'express'
import {
  conChangePassword,
  conDeactivateUser,
  conFetchAllUsers,
  conFetchLoggedInUser,
  conFetchUserByCategory,
  conFetchUserById,
  conFetchUserCredentials,
  conLoginUser,
  conRegisterNewUser,
  conResetPassword,
  conSendOTP,
  conUpdateUser, conUpdateUserAfterUpload,
  conVerifyOTP
} from './user.controller'
import { authenticator } from '../../middleware/authenticator'
import { UserOperations } from './user.types'
import { uploadSingleImage } from '../../middleware/fileHandler'
import { UploadPath } from '../../utils/enum'

const router = Router()

// UNSECURE
router.get('/', conFetchAllUsers)

router.post('/login', conLoginUser)

router.post('/register', conRegisterNewUser)

router.post('/verify-otp', conVerifyOTP)

router.post('/resend-otp', conSendOTP)

router.post('/forgot-password', (req, res, next) => {
  req.body.operation = UserOperations.FORGOT_PASSWORD
  req.newOperation = true
  next()
}, conSendOTP)

router.post('/reset-password', (req, res, next) => {
  req.body.operation = UserOperations.RESET_PASSWORD
  next()
}, conResetPassword)

// SECURED
router.use(authenticator)

router.get('/profile', conFetchLoggedInUser)

router.get('/credentials', conFetchUserCredentials)

router.put('/change-password', conChangePassword)

router.put('/update', conUpdateUser)

router.get('/deactivate', conDeactivateUser)

router.put('/upload', uploadSingleImage('image', UploadPath.USER), conUpdateUserAfterUpload)

router.get('/category/:category', conFetchUserByCategory)

router.get('/:id', conFetchUserById)

export { router as userRouter }

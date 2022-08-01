import { FieldTypeUserJWT, UserCategory } from '../models/user/user.types'
import { UserModel } from '../models/user/userModel'
import { commonResponse, responseCode, userResponse } from '../utils/constants'

const authorizerAdmin = (req, res, next) => {
  const { userId } = req.loggedInUser as FieldTypeUserJWT

  UserModel.findById(userId)
    .then((user) => {
      if (!user) {
        next({ message: userResponse.error.USER_NOT_FOUND, status: responseCode.NOT_FOUND })
      } else if (user.category !== UserCategory.ADMIN) {
        next({ message: commonResponse.error.UNAUTHORIZED_ACCESS, status: responseCode.FORBIDDEN })
      } else {
        next()
      }
    })
    .catch(() => {
      next({})
    })
}
const authorizerCompany = (req, res, next) => {
  const { userId } = req.loggedInUser as FieldTypeUserJWT

  UserModel.findById(userId)
    .then((user) => {
      if (!user) {
        next({ message: userResponse.error.USER_NOT_FOUND, status: responseCode.NOT_FOUND })
      } else if (user.category !== UserCategory.RENTER) {
        next({ message: commonResponse.error.UNAUTHORIZED_ACCESS, status: responseCode.FORBIDDEN })
      } else {
        next()
      }
    })
    .catch(() => {
      next({})
    })
}

const authorizerCustomer = (req, res, next) => {
  const { userId } = req.loggedInUser as FieldTypeUserJWT

  UserModel.findById(userId)
    .then((user) => {
      if (!user) {
        next({ message: userResponse.error.USER_NOT_FOUND, status: responseCode.NOT_FOUND })
      } else if (user.category !== UserCategory.TENANT) {
        next({ message: commonResponse.error.UNAUTHORIZED_ACCESS, status: responseCode.FORBIDDEN })
      } else {
        next()
      }
    })
    .catch(() => {
      next({})
    })
}

export { authorizerAdmin, authorizerCompany, authorizerCustomer }

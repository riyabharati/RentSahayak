import { FieldTypeHouseInsert, FieldTypeHouseMain, FieldTypeHouseUpdate } from './house.types'
import {
  deleteHouse,
  fetchAllHouses, fetchHouseById,
  insertHouse,
  updateHouse
} from './house.query'

import { makeSuccessObject } from '../../../utils'
import { commonResponse, houseResponse, responseCode } from '../../../utils/constants'
import { FieldTypeUserJWT } from '../../user/user.types'

const conFetchAllHouses = async (req, res, next) => {
  try {
    const houses = await fetchAllHouses()
    res.status(houses && houses.length > 0 ? responseCode.OK : responseCode.OK)
      .send(makeSuccessObject<FieldTypeHouseMain[]>(houses, houseResponse.success.FETCH_ALL))
  } catch (_err) {
    next({ message: houseResponse.error.FETCH_ALL, status: responseCode.BAD_REQUEST })
  }
}

const conFetchHouseById = async (req, res, next) => {
  const { id } = req.params
  try {
    const houses = await fetchHouseById(id)
    res.status(houses && houses.length > 0 ? responseCode.OK : responseCode.OK)
      .send(makeSuccessObject<FieldTypeHouseMain>(houses[0], houseResponse.success.FETCH_BY_ID))
  } catch (_err) {
    next({ message: houseResponse.error.FETCH_BY_ID, status: responseCode.BAD_REQUEST })
  }
}

const conInsertNewHouse = async (req, res, next) => {
  const { userId } = req.loggedInUser as FieldTypeUserJWT
  const { title, price, ...remainingBody } = req.body as FieldTypeHouseInsert
  if (!title || !price) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.BAD_REQUEST })
  }
  try {
    const response = await insertHouse({ price, title, userId, ...remainingBody })
    res.status(response ? responseCode.OK : responseCode.INTERNAL_SERVER)
      .send(makeSuccessObject<FieldTypeHouseMain>(response, houseResponse.success.INSERT))
  } catch (_err) {
    next({ message: houseResponse.error.INSERT, status: responseCode.BAD_REQUEST })
  }
}

const conUpdateHouse = async (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.BAD_REQUEST })
  }
  try {
    const response = await updateHouse(id, req.body as FieldTypeHouseUpdate)
    res.status(response ? responseCode.OK : responseCode.INTERNAL_SERVER)
      .send(makeSuccessObject<FieldTypeHouseMain>(response, houseResponse.success.UPDATE))
  } catch (_err) {
    next({ message: houseResponse.error.UPDATE, status: responseCode.BAD_REQUEST })
  }
}

const conDeleteHouse = async (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.BAD_REQUEST })
  }
  try {
    const response = await deleteHouse(id)
    res.status(response ? responseCode.OK : responseCode.INTERNAL_SERVER)
      .send(makeSuccessObject<FieldTypeHouseMain>(response, houseResponse.success.DELETE))
  } catch (_err) {
    next({ message: houseResponse.error.DELETE, status: responseCode.BAD_REQUEST })
  }
}

export {
  conFetchHouseById,
  conFetchAllHouses,
  conInsertNewHouse,
  conDeleteHouse,
  conUpdateHouse
}

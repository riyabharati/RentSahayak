import { FieldTypeCategory } from './category.types'
import {
  deleteCategory,
  fetchAllCategories,
  insertCategory,
  updateCategory
} from './category.query'

import { makeSuccessObject } from '../../utils'
import { categoryResponse, commonResponse, responseCode } from '../../utils/constants'

const conFetchAllCategories = async (req, res, next) => {
  try {
    const categories = await fetchAllCategories()
    res.status(categories && categories.length > 0 ? responseCode.OK : responseCode.OK)
      .send(makeSuccessObject<FieldTypeCategory[]>(categories, categoryResponse.success.FETCH_ALL))
  } catch (_err) {
    next({ message: categoryResponse.error.FETCH_ALL, status: responseCode.BAD_REQUEST })
  }
}

const conInsertNewCategory = async (req, res, next) => {
  const { description, name } = req.body as FieldTypeCategory
  if (!name) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.BAD_REQUEST })
  }
  try {
    const response = await insertCategory({ description, name })
    res.status(response ? responseCode.OK : responseCode.INTERNAL_SERVER)
      .send(makeSuccessObject<FieldTypeCategory>(response, categoryResponse.success.INSERT))
  } catch (_err) {
    next({ message: categoryResponse.error.INSERT, status: responseCode.BAD_REQUEST })
  }
}

const conUpdateCategory = async (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.BAD_REQUEST })
  }
  try {
    const response = await updateCategory(id, req.body as FieldTypeCategory)
    res.status(response ? responseCode.OK : responseCode.INTERNAL_SERVER)
      .send(makeSuccessObject<FieldTypeCategory>(response, categoryResponse.success.UPDATE))
  } catch (_err) {
    next({ message: categoryResponse.error.UPDATE, status: responseCode.BAD_REQUEST })
  }
}

const conDeleteCategory = async (req, res, next) => {
  const { id } = req.params
  if (!id) {
    return next({ message: commonResponse.error.INVALID_BODY, status: responseCode.BAD_REQUEST })
  }
  try {
    const response = await deleteCategory(id)
    res.status(response ? responseCode.OK : responseCode.INTERNAL_SERVER)
      .send(makeSuccessObject<FieldTypeCategory>(response, categoryResponse.success.DELETE))
  } catch (_err) {
    next({ message: categoryResponse.error.DELETE, status: responseCode.BAD_REQUEST })
  }
}

export {
  conFetchAllCategories,
  conInsertNewCategory,
  conDeleteCategory,
  conUpdateCategory
}

import { FieldTypeCategory } from './category.types'
import { CategoryModel } from './categoryModel'
import { ObjectId } from 'mongoose'

const categoryProjection = {
  description: 1, name: 1
}

const fetchAllCategories = () => {
  return CategoryModel.find({ deleted: false }, { ...categoryProjection })
}

const insertCategory = (data: FieldTypeCategory) => {
  const newCategory = new CategoryModel(data)

  return newCategory.save({ validateBeforeSave: true })
}

const updateCategory = (id: ObjectId, data) => {
  return CategoryModel.findByIdAndUpdate(id, { $set: data }, { projection: { ...categoryProjection }, returnDocument: 'after', returnOriginal: false })
}

const deleteCategory = (id: ObjectId) => {
  return CategoryModel.findByIdAndUpdate(id, { $set: { deleted: true } }, { projection: {} })
}

export {
  fetchAllCategories,
  insertCategory,
  updateCategory,
  deleteCategory
}

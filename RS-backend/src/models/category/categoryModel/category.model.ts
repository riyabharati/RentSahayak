import { Model, Schema, model } from 'mongoose'
import { FieldTypeCategoryMain } from '../category.types'
import { collectionNames } from '../../../config'

const categorySchema = new Schema<FieldTypeCategoryMain>({
  deleted: {
    default: false,
    type: Boolean
  },
  description: {
    type: String
  },
  name: {
    required: true,
    type: String
  }
}, { strict: true, timestamps: { createdAt: true, updatedAt: 'modifiedAt' } })

const CategoryModel: Model<FieldTypeCategoryMain> = model(collectionNames.CATEGORY, categorySchema)

export { CategoryModel }

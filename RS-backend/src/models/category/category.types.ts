import { ObjectId } from 'mongoose'

interface FieldTypeCategory {
  description?: string
  name: string
}

interface FieldTypeCategoryMain extends FieldTypeCategory {
  _id: ObjectId,
  deleted: boolean
}

export {
  FieldTypeCategory,
  FieldTypeCategoryMain
}

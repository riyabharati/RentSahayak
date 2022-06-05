import { FieldTypeCategory } from '../category.types'
import { FunctionWithParamAndReturn } from '../../../utils'

export const categoryMapping:FunctionWithParamAndReturn<FieldTypeCategory, FieldTypeCategory> = (data2) => {
  const data1: FieldTypeCategory = {} as FieldTypeCategory
  if (data2) {
    if (data2.description) data1.description = data2.description
    if (data2.name) data1.name = data2.name
  }

  return (data1)
}

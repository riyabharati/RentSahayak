import { FieldTypeHouseUpdate } from '../house.types'
import { FunctionWithParamAndReturn } from '../../../../utils'

export const houseMapping:FunctionWithParamAndReturn<FieldTypeHouseUpdate, FieldTypeHouseUpdate> = (data2) => {
  const data1: FieldTypeHouseUpdate = {} as FieldTypeHouseUpdate
  if (data2) {
    if (data2.description) data1.description = data2.description
    if (data2.title) data1.title = data2.title
    if (data2.images) data1.images = data2.images
    if (data2.price) data1.price = data2.price
    if (data2.features) {
      if (data2.features.floors) data1.features.floors = data2.features.floors
    }
  }

  return (data1)
}

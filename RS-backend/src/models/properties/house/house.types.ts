import { FieldTypeProperty, FieldTypePropertyMain, FieldTypePropertyUpdate } from '../properties.types'

enum HouseFurnishing {
  NON = 'NON',
  FULL = 'FULL',
  SEMI = 'SEMI'
}

interface FieldTypeHouse {
  floors?: number
  bedroom?: number,
  bathroom?: number,
  parkingSpace?: string,
  furnishing?: HouseFurnishing,
  roadSize?: string,
  roadType?: string,
  areaSqFeet?: number
}

interface FieldTypeHouseInsert extends FieldTypeProperty {
  userId: string
  features?: FieldTypeHouse
}

interface FieldTypeHouseUpdate extends FieldTypePropertyUpdate {
  features?: FieldTypeHouse
}

interface FieldTypeHouseMain extends FieldTypePropertyMain {
  features: FieldTypeHouse
}

export {
  FieldTypeHouse,
  HouseFurnishing,
  FieldTypeHouseMain,
  FieldTypeHouseInsert,
  FieldTypeHouseUpdate
}

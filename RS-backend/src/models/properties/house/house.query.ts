import { FieldTypeHouseInsert, FieldTypeHouseUpdate } from './house.types'
import { HouseModel } from './houseModel'
import { ObjectId } from 'mongoose'

const houseProjection = {
  description: 1, features: 1, images: 1, price: 1, title: 1
}

const fetchAllHouses = () => {
  return HouseModel.find({ deleted: false }, { ...houseProjection })
}

const fetchHouseById = (id) => {
  return HouseModel.find({ _id: id, deleted: false }, { ...houseProjection })
}

const insertHouse = (data: FieldTypeHouseInsert) => {
  const newHouse = new HouseModel(data)

  return newHouse.save({ validateBeforeSave: true })
}

const updateHouse = (id: ObjectId, data: FieldTypeHouseUpdate) => {
  return HouseModel.findByIdAndUpdate(id, { $set: data }, { projection: { ...houseProjection }, returnDocument: 'after', returnOriginal: false })
}

const deleteHouse = (id: ObjectId) => {
  return HouseModel.findByIdAndUpdate(id, { $set: { deleted: true } }, { projection: {} })
}

export {
  fetchHouseById,
  fetchAllHouses,
  insertHouse,
  updateHouse,
  deleteHouse
}

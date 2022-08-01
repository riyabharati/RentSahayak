import { Router } from 'express'

import {
  conDeleteHouse,
  conFetchAllHouses,
  conFetchHouseById,
  conInsertNewHouse,
  conUpdateHouse
} from './house.controller'

const router = Router()

router.route('/')
  .get(conFetchAllHouses)
  .post(conInsertNewHouse)

router.route('/:id')
  .get(conFetchHouseById)
  .put(conUpdateHouse)
  .delete(conDeleteHouse)

export { router as houseRouter }

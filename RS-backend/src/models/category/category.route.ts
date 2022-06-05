import { Router } from 'express'

import {
  conDeleteCategory,
  conFetchAllCategories,
  conInsertNewCategory,
  conUpdateCategory
} from './category.controller'

import { authorizerAdmin } from '../../middleware/authorizer'

const router = Router()

router.get('/', conFetchAllCategories)

router.use(authorizerAdmin)
router.post('/', conInsertNewCategory)
router.route('/:id')
  .put(conUpdateCategory)
  .delete(conDeleteCategory)

export { router as categoryRouter }

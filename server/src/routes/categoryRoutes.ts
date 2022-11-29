import express from 'express'

import {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers'
import { validateCreateCategory } from '../middlewares/checks/category'
import { validateAdmin } from '../middlewares/validateAdmin'

const router = express.Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', validateAdmin, validateCreateCategory, createCategory)
router.put('/:id', validateAdmin, updateCategory)
router.delete('/:id', validateAdmin, deleteCategory)

export default router

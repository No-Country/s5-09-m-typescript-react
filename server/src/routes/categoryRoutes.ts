import express from 'express'

import {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers'
import { validateCreateCategory } from '../middlewares/checks/category'

const router = express.Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', validateCreateCategory, createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router

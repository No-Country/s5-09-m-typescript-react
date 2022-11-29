import express from 'express'
import { getCategories } from '../controllers/category/getCategories'
import { getCategory } from '../controllers/category/getCategory'
import { createCategory } from '../controllers/category/createCategory'
import { updateCategory } from '../controllers/category/updateCategory'
import { deleteCategory } from '../controllers/category/deleteCategory'
import { validateCreateCategory } from '../middlewares/category'

const router = express.Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', validateCreateCategory, createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router

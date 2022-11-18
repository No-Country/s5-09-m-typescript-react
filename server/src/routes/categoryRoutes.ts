import express from 'express'
const router = express.Router()
import { getCategories } from '../controllers/category/getCategories'
import { createCategory } from '../controllers/category/createCategory'

router.get('/', getCategories)
router.post('/', createCategory)

export default router
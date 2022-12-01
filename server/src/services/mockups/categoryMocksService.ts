import Category from '../../models/Category'
import { createCategoryService } from '../category/createCategory'
import categories from '../../utils/mockups/categories.json'

export const categoryMocksService = async () => {
    const isCategory = await Category.findOne()

    if (!isCategory) {
        categories.forEach(async (category) => {
            try {
                await createCategoryService(category)
            } catch (error) {
                return error
            }
        })
    }
}
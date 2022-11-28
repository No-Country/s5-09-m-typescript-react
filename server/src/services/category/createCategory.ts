import { Category } from '../../interfaces/category'
import CategoryModel from '../../models/Category'

const createCategoryService = async (category: Category) => {
    const responseInsert = await CategoryModel.create(category)
    return responseInsert
}
export { createCategoryService }

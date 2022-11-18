import { Category } from '../../interfaces/category'
import categoryModel from '../../models/Category'

const createCategoryService = async (category: Category) => {
    const responseInsert = await categoryModel.create(category)
    return responseInsert
}
export { createCategoryService }

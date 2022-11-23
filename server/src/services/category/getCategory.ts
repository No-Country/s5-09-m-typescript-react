import CategoryModel from '../../models/Category'

const getCategoryService = async (id: string) => {
    const responseCategory = await CategoryModel.find({ _id: id })
    return responseCategory
}

export { getCategoryService }

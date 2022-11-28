import categoryModel from '../../models/Category'

const getCategoriesService = async () => {
    const responseCategory = await categoryModel.find({})
    return responseCategory
}

export { getCategoriesService }

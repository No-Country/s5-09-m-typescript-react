import CategoryModel from '../../models/Category'

const deleteCategoryService = async (id: string) => {
    const responseCategory = await CategoryModel.findByIdAndDelete({ _id: id })
    return responseCategory
}

export { deleteCategoryService }
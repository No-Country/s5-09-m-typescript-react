import { Habit } from '../../interfaces/habit'
import CategoryModel from '../../models/Category'

const upadateCategoryService = async (id: string, habit: Habit) => {
    const categoryUpdated = await CategoryModel.findByIdAndUpdate({ _id: id }, habit, {
        new: true,
    })
    return categoryUpdated
}
export { upadateCategoryService }
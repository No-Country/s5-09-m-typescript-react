import { Habit } from '../../interfaces/habit'
import habitModel from '../../models/Habit'

const createHabitService = async (habit: Habit) => {
    const responseInsert = await habitModel.create(habit)
    return responseInsert
}
export { createHabitService }

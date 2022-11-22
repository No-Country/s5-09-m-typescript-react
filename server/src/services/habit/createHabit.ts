import { Habit } from '../../interfaces/habit'
import HabitModel from '../../models/Habit'

const createHabitService = async (habit: Habit) => {
    const responseInsert = await HabitModel.create(habit)
    return responseInsert
}
export { createHabitService }

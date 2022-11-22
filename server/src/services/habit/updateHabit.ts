import { Habit } from '../../interfaces/habit'
import HabitModel from '../../models/Habit'

const upadateHabitService = async (id: string, habit: Habit) => {
    const habitUpdated = await HabitModel.findByIdAndUpdate({ _id: id }, habit, {
        new: true,
    })
    return habitUpdated
}
export { upadateHabitService }
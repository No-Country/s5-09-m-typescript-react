import Habit from '../../models/Habit'
import { createHabitService } from '../habit/createHabit'
import habits from '../../utils/mockups/habits.json'

export const habitMocksService = async () => {
    const isHabit = await Habit.findOne()

    if (!isHabit) {
        habits.forEach(async (habit) => {
            try {
                await createHabitService(habit)
            } catch (error) {
                return error
            }
        })
    }
}
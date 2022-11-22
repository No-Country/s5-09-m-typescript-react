import HabitModel from '../../models/Habit'

const getHabitsService = async () => {
    const responseHabit = await HabitModel.find({})
    return responseHabit
}

export { getHabitsService }

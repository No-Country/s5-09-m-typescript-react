import HabitModel from '../../models/Habit'

const getHabitsService = async () => {
    const responseHabit = await HabitModel.find({}).populate('category')
    return responseHabit
}

export { getHabitsService }

import habitModel from '../../models/Habit'

const getHabitsService = async () => {
    const responseHabit = await habitModel.find({})
    return responseHabit
}

export { getHabitsService }

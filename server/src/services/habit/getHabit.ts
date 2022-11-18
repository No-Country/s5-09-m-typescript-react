import habitModel from '../../models/Habit'

const getHabitService = async (id: string) => {
    const responseHabit = await habitModel.find({ _id: id })
    return responseHabit
}

export { getHabitService }

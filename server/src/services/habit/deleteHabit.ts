import HabitModel from '../../models/Habit'

const deleteHabitService = async (id: string) => {
    const responseHabit = await HabitModel.findByIdAndDelete({ _id: id })
    return responseHabit
}

export { deleteHabitService }

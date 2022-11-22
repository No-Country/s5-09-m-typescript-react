import HabitModel from '../../models/Habit'

const getHabitService = async (id: string) => {
    const responseHabit = await HabitModel.findById({ _id: id })
    
    if (!responseHabit) throw new Error('NOT_FOUND_ID');

    return responseHabit
}

export { getHabitService }

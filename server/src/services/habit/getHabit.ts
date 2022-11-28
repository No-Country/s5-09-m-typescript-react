import HabitModel from '../../models/Habit'

const getHabitService = async (id: string) => {
    const responseHabit = await HabitModel.findOne({ _id: id }).populate('category')
    
    if (!responseHabit) throw new Error('NOT_FOUND_ID');

    return responseHabit
}

export { getHabitService }

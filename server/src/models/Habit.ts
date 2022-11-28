import { Schema, model, Types } from 'mongoose'
import { Habit } from '../interfaces/habit'

const habitSchema = new Schema<Habit>({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
        default:
            'https://st3.depositphotos.com/3867453/13387/v/450/depositphotos_133874112-stock-illustration-letter-h-heart-logo-icon.jpg',
    },
    description: {
        type: String,
        required: true,
    },
    category: 
        {
            type: Types.ObjectId,
            ref: 'Category',
        },
})

const Habit = model('Habit', habitSchema)
export default Habit

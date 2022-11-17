import { Schema, model } from 'mongoose'
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
            'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    },
    description: {
        type: String,
        required: true,
    },
    /* category: {
            type: Types.ObjectId,
            ref: 'Categorys',
    }, */
})

const Habit = model('Habit', habitSchema)
export default Habit
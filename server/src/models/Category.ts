import { Schema, model } from 'mongoose'
import { Category } from '../interfaces/category'

const categorySchema = new Schema<Category>({
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
    }
})

const Category = model('Category', categorySchema)
export default Category
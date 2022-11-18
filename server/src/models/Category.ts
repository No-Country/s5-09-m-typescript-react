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
            'https://st3.depositphotos.com/1561359/12975/i/600/depositphotos_129758564-stock-photo-3d-green-letter-c.jpg',
    },
    description: {
        type: String,
        required: true,
    }
})

const Category = model('Category', categorySchema)
export default Category
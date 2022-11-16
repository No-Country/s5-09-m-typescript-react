import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user'

const userSchema = new Schema<User>({
    fullname: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default:
            'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    },
    password: {
        type: String,
        default: ':roll_eyes:',
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    /* practices: [
        {
            type: Types.ObjectId,
            ref: 'Practices',
        },
    ], */
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },
    externId: {
        type: String,
        default: '',
    },
    email_verified: {
        type: Boolean,
        required: true,
        default: false,
    },
    status: {
        type: String,
        default: 'Active',
    },
    resetLink: {
        type: String,
        default: '',
    },
})

const User = model('User', userSchema)
export default User

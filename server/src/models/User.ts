import { Schema, model, Types } from 'mongoose'
import { IUser } from '../interfaces/user'

const userSchema = new Schema<IUser>({
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
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    practices: [
        {
            practice: { type: Types.ObjectId, ref: 'Habit' },
            accomplished: { type: Boolean, default: false },
            default: [],
        },
    ],
    notifications: [
        {
            title: { type: String },
            description: { type: String },
            img: { type: String },
            read: { type: Boolean, default: false },
        },
    ],
    notes: [{ type: { type: String }, date: { type: Date } }], //! Esta es para fechas del usuario a cargar calendario (pendiente poner mas campos)
    admin: {
        type: Boolean,
        default: false,
    },
    externId: {
        type: String,
        default: '',
    },
    email_verified: {
        type: Boolean,
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

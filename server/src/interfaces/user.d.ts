import { ObjectId } from 'mongoose'
import { StatusUser } from '../utils/enums.ts'

export interface User {
    _id: ObjectId
    fullname?: string
    img: string
    password: string
    email: string
    practices?: Types.ObjectId[]
    admin: boolean
    externId?: string
    email_verified: boolean
    status?: StatusUser
    resetLink: string
}

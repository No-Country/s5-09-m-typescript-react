import { StatusUser } from '../utils/enums.ts'

export interface User {
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

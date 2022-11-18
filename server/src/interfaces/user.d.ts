import { StatusUser } from '../utils/enums.ts'

export interface Notifications {
    title: string
    description?: string
    img?: string
    read?: boolean
}

export interface Notes {
    type: string
    date: date
}

export interface IUser {
    _id: string
    fullname?: string
    img?: string
    password: string
    email: string
    practices?: Types.ObjectId[]
    admin: boolean
    externId?: string
    email_verified?: boolean
    status?: StatusUser
    resetLink?: string
    notifications?: Notifications
    notes?: Notes
    code?: number
}

ex

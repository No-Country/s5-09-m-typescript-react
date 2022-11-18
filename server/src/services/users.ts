import { User } from '../interfaces/user'
import UserModel from '../models/User'
import bcryptjs from 'bcryptjs'

export const createUser = async (user: User) => {
    try {
        const findByEmail = await UserModel.findOne({ email: user.email })
        console.log(findByEmail)

        if (findByEmail === null) {
            const userToCreate = await UserModel.create(user)
            const salt = bcryptjs.genSaltSync()
            userToCreate.password = bcryptjs.hashSync(user.password, salt)
            await userToCreate.save()

            const { _id } = userToCreate

            const response = {
                msg: 'Users created',
                status: 200,
                ok: true,
                id: _id,
            }

            return response
        }
        //Todo: Aca iria el envio del mail de bienvenida
        const response = {
            status: 404,
            msg: 'User already exist.',
            ok: false,
        }

        return response
    } catch (error) {
        return error
    }
}

export const getUsers = async () => {
    try {
        const usersRetrieved = await UserModel.find()

        if (usersRetrieved.length <= 0) {
            const response = {
                status: 404,
                msg: 'No user finded',
                ok: false,
            }
            return response
        }

        const response = {
            msg: 'Users finded with success',
            ok: true,
            status: 200,
            usersRetrieved,
        }
        return response
    } catch (error) {
        return error
    }
}

export const getUser = async (id: string) => {
    try {
        const userRetrieved = await UserModel.findById({ _id: id })

        if (userRetrieved) {
            const { fullname, email, _id } = userRetrieved

            const response = {
                msg: 'User finded with success',
                status: 200,
                ok: true,
                user: { fullname, email, _id },
            }
            return response
        }

        const response = {
            status: 404,
            msg: 'Cannot find user with this id',
            ok: false,
        }

        return response
    } catch (error) {
        return error
    }
}
export const deleteUser = async (id: string) => {
    try {
        const userDeleted = await UserModel.findByIdAndDelete({ _id: id })

        if (userDeleted) {
            const response = {
                status: 200,
                msg: 'User deleted with success',
                ok: true,
            }
            return response
        }

        const response = {
            status: 404,
            msg: 'Cannot find user with this id',
            ok: false,
        }
        return response
    } catch (error) {
        return error
    }
}

export const updateUser = async (id: string, user: User) => {
    try {
        const userUpdated = await UserModel.findByIdAndUpdate(
            { _id: id },
            user,
            {
                new: true,
            }
        )
        if (userUpdated) {
            const { fullname, email, _id } = userUpdated
            const response = {
                status: 200,
                msg: 'User updated with success',
                user: { fullname, email, _id },
                ok: true,
            }
            return response
        }

        const response = {
            status: 404,
            msg: 'Cannot find user with this id',
            ok: false,
        }
        return response
    } catch (error) {
        return error
    }
}

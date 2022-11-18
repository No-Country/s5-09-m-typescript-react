import { IUser } from '../interfaces/user'
import User from '../models/User'
import bcryptjs from 'bcryptjs'

export const createUser = async (user: IUser) => {
    try {
        const findByEmail = await User.findOne({ email: user.email })
        console.log(findByEmail)

        if (findByEmail === null) {
            const userToCreate = await User.create(user)
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
        let response
        const usersRetrieved = await User.find()

        if (usersRetrieved.length < 0) {
            response = {
                status: 404,
                msg: 'No.',
            }
        }

        // eslint-disable-next-line prefer-const
        response = {
            msg: 'Success',
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
        let response
        const userRetrieved = await User.findById(id)

        if (!userRetrieved) {
            response = {
                status: 404,
                msg: 'No.',
            }
        }

        // eslint-disable-next-line prefer-const
        response = {
            msg: 'Success',
            status: 200,
            object: userRetrieved,
        }
        return response
    } catch (error) {
        return error
    }
}
export const deleteUser = async (id: string) => {
    try {
        let response
        const userDeleted = await User.findByIdAndDelete({ _id: id })
        console.log(userDeleted)

        if (userDeleted === null) {
            response = {
                status: 404,
                msg: 'Cannot find user with this id',
            }
        } else {
            response = {
                status: 200,
                msg: 'User deleted with success',
            }
        }

        return response
    } catch (error) {
        return error
    }
}

export const updateUser = async (id: string, user: IUser) => {
    try {
        let response
        const userUpdated = await User.findByIdAndUpdate({ _id: id }, user, {
            new: true,
        })
        console.log(userUpdated)

        if (userUpdated === null) {
            response = {
                status: 404,
                msg: 'Cannot find user with this id',
            }
            console.log('aca', userUpdated)
        } else {
            response = {
                status: 200,
                msg: 'User updated with success',
                userUpdated,
            }
        }

        return response
    } catch (error) {
        console.log('server err')

        return error
    }
}

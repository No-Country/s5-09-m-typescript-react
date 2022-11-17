import User from '../models/User'

export const createUser = async (user: any) => {
    try {
        let response
        const findByEmail = await User.findOne({ email: user.email })
        console.log(!findByEmail)

        const userToCreate = await User.create(user)

        if (findByEmail) {
            response = {
                status: 404,
                msg: 'User already exist.',
            }
        }

        response = {
            msg: 'Users created',
            status: 200,
            userToCreate,
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

export const updateUser = async (id: string, user: any) => {
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

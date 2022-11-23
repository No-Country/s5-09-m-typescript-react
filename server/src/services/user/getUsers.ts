import User from '../../models/User'

export const getUsersService = async () => {
    try {
        const usersRetrieved = await User.find()

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

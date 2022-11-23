import User from '../../models/User'

export const deleteUserService = async (id: string) => {
    try {
        const userDeleted = await User.findByIdAndDelete({ _id: id })

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

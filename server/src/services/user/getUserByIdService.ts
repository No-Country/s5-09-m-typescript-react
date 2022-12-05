import User from '../../models/User'

export const getUserByIdService = async (id: string) => {
    try {
        const user = await User.findById({ _id: id, status: 'Active' })

        if (user) {
            const response = {
                ok: true,
                user,
            }
            return response
        }

        const response = {
            ok: false,
        }

        return response
    } catch (error) {
        return error
    }
}

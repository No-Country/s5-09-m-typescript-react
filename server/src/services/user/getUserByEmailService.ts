import User from '../../models/User'

export const getUserByEmailService = async (email: string) => {
    try {
        const user = await User.findOne({ email })

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

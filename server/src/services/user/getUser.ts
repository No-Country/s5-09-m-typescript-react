import User from '../../models/User'

export const getUserService = async (id: string) => {
    try {
        const userRetrieved = await User.findById({ _id: id }).populate(
            'practices.practice'
        )

        if (userRetrieved) {
            const { email, _id, fullname, img, practices, email_verified } =
                userRetrieved
            const response = {
                msg: 'Usuario encontrado con exito.',
                status: 200,
                ok: true,
                user: { email, _id, fullname, img, practices, email_verified },
            }
            return response
        }

        const response = {
            status: 404,
            msg: 'Usuario no encontrado.',
            ok: false,
        }

        return response
    } catch (error) {
        return error
    }
}

import User from '../../models/User'

export const getUserService = async (id: string) => {
    try {
        const userRetrieved = await User.findById({ _id: id })

        if (userRetrieved) {
            const response = {
                msg: 'Usuario encontrado con exito.',
                status: 200,
                ok: true,
                user: userRetrieved,
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

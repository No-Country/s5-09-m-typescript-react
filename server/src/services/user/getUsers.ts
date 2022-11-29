import User from '../../models/User'

export const getUsersService = async () => {
    try {
        const usersRetrieved = await User.find().select(
            '_id fullname img practices email'
        )

        if (usersRetrieved.length <= 0) {
            const response = {
                status: 404,
                msg: 'No existe ningun usuario todavia.',
                ok: false,
            }
            return response
        }

        const response = {
            msg: 'Usuarios encontrados con exito.',
            ok: true,
            status: 200,
            usersRetrieved,
        }
        return response
    } catch (error) {
        return error
    }
}

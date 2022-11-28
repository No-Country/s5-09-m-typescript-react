import User from '../../models/User'

export const deleteUserService = async (id: string) => {
    try {
        const userDeleted = await User.findByIdAndDelete({ _id: id })

        if (userDeleted) {
            const response = {
                status: 200,
                msg: 'Usuario eliminado con exito.',
                ok: true,
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

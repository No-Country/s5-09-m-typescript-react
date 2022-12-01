import { IUser } from '../../interfaces/user'
import User from '../../models/User'

export const updateUserService = async (id: string, user: IUser) => {
    try {
        const userUpdated = await User.findByIdAndUpdate({ _id: id }, user, {
            new: true,
        }).populate('practices.practice')
        if (userUpdated) {
            const { fullname, email, _id, practices } = userUpdated
            const response = {
                status: 200,
                msg: 'Usuario actualizado con exito.',
                user: { fullname, email, _id, practices },
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

import { IUser } from '../../interfaces/user'
import User from '../../models/User'
import bcryptjs from 'bcryptjs'

export const createUserService = async (user: IUser) => {
    try {
        const findByEmail = await User.findOne({ email: user.email })
        console.log(findByEmail)

        if (findByEmail === null) {
            const userToCreate = await User.create(user)
            const salt = bcryptjs.genSaltSync()
            userToCreate.password = bcryptjs.hashSync(user.password, salt)
            await userToCreate.save()

            const { _id } = userToCreate

            const response = {
                msg: 'Users created',
                status: 200,
                ok: true,
                id: _id,
            }

            return response
        }
        //Todo: Aca iria el envio del mail de bienvenida
        const response = {
            status: 404,
            msg: 'User already exist.',
            ok: false,
        }

        return response
    } catch (error) {
        return error
    }
}

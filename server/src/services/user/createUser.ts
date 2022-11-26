import { IUser } from '../../interfaces/user'
import User from '../../models/User'
import bcryptjs from 'bcryptjs'
import generateCode from '../../utils/generateCode'
import { sendWelcomeEmail } from '../../utils/sendWelcomeEmail'

export const createUserService = async (user: IUser) => {
    try {
        const findByEmail = await User.findOne({ email: user.email })
        console.log(findByEmail)

        if (findByEmail === null) {
            const userToCreate = await User.create(user)
            const salt = bcryptjs.genSaltSync()
            userToCreate.password = bcryptjs.hashSync(user.password, salt)
            const newCode = generateCode()
            userToCreate.code = newCode
            await userToCreate.save()

            const { _id, code, fullname, email } = userToCreate

            const response = {
                msg: 'Users created',
                status: 200,
                ok: true,
                id: _id,
            }

            sendWelcomeEmail(fullname, code, email)

            return response
        }

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

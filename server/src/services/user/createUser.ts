import bcryptjs from 'bcryptjs'

import { IUser } from '../../interfaces/user'
import User from '../../models/User'
import { generateCode, sendWelcomeEmail } from '../../utils'
import { mailchimpService } from '../../services'

export const createUserService = async (user: IUser) => {
    try {
        const findByEmail = await User.findOne({ email: user.email })

        if (findByEmail === null) {
            const userToCreate = await User.create(user)
            const salt = bcryptjs.genSaltSync()
            userToCreate.password = bcryptjs.hashSync(user.password, salt)
            const newCode = generateCode()
            userToCreate.code = newCode
            await userToCreate.save()

            const { _id, code, fullname, email } = userToCreate

            const response = {
                msg: 'Usuario creado',
                status: 200,
                ok: true,
                id: _id,
                fullname,
                code,
            }

            //*Mando email de bienvenida
            sendWelcomeEmail(fullname, code, email)

            //*Suscribo a Mailchimp
            mailchimpService(email)

            return response
        }

        const response = {
            status: 404,
            msg: 'El usuario ya existe.',
            ok: false,
        }

        return response
    } catch (error) {
        console.log(error)

        return error
    }
}

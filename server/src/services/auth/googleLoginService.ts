import bcrypt from 'bcryptjs'

import User from '../../models/User'
import { generateJwt } from '../../utils'

export const googleLoginService = async (
    name: string,
    picture: string,
    sub: string,
    email: string
) => {
    try {
        const user = await User.findOne({
            email,
            status: 'Active',
        })

        if (!user) {
            const newUser = new User({
                fullname: name,
                email: email,
                password: ':P',
                img: picture,
                externId: sub,
            })

            //*Encrypt password
            const salt = bcrypt.genSaltSync()
            newUser.password = bcrypt.hashSync(newUser.password, salt)

            //*Generate JWT
            const token = await generateJwt(newUser.id, newUser.admin)

            await newUser.save()

            const response = { ok: false, token: token, user: newUser }
            return response
        }

        const response = { ok: true, user }
        return response
    } catch (error) {
        return error
    }
}

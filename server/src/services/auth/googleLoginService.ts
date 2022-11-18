import bcrypt from 'bcryptjs'

import User from '../../models/User'
import { generateJwt } from '../../utils'
import { IPayload } from '../../interfaces/jwtPayload'

export const googleLoginService = async (userInfo: IPayload) => {
    try {
        const user = await User.findOne({
            email: userInfo.email,
            status: 'Active',
        })

        if (!user) {
            const newUser = new User({
                fullname: userInfo.name,
                email: userInfo.email,
                password: ':P',
                img: userInfo.picture,
                externId: userInfo.sub,
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

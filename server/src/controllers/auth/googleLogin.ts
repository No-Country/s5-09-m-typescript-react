import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'

import { googleLoginService } from '../../services/auth/googleLoginService'
import { generateJwt } from '../../utils'

export const googleLogin = async (req: Request, res: Response) => {
    const { name, picture, sub, email } = req.body

    console.log(name, picture, sub, email)

    try {
        const response = (await googleLoginService(
            name,
            picture,
            sub,
            email
        )) as IResponse

        if (!response.ok) {
            const { user, token } = response
            return res.status(200).json({
                ok: true,
                msg: 'User Created and Logged',
                id: user._id,
                token: token,
                google: true,
            })
        }

        const { user } = response

        //*Generate JWT
        const token = await generateJwt(user._id, user.admin)

        return res.status(200).json({
            ok: true,
            msg: 'Usuario logeado',
            id: user._id,
            token,
            google: true,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}

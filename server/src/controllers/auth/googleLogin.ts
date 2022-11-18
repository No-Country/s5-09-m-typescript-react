import { Request, Response } from 'express'
import jwt_decode from 'jwt-decode'

import { generateJwt } from '../../utils'
import { googleLoginService } from '../../services/auth/googleLoginService'
import { IResponse } from '../../interfaces/response'
import { IPayload } from '../../interfaces/jwtPayload'

export const googleLogin = async (req: Request, res: Response) => {
    const { credential } = req.body

    try {
        const userInfo = jwt_decode(credential) as IPayload

        const response = (await googleLoginService(userInfo)) as IResponse

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

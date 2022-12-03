import { Request, Response } from 'express'

import { IResponse } from '../../interfaces/response'
import { getUserByEmailService, updateUserService } from './../../services'
import { sendForgotPasswordEmail } from '../../utils/sendForgotPasswordEmail'
import jwt from 'jsonwebtoken'
import { secretKey, baseUrl } from '../../config/globals'

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body

    try {
        const response = await getUserByEmailService(email)
        const { ok, user } = response as IResponse

        if (ok === false) {
            return res.status(404).json({
                ok: false,
                msg: 'El email ingresado no existe en la base de datos',
            })
        }

        //* Genero Token
        const { _id, admin } = user

        const token = jwt.sign({ _id, admin }, secretKey, {
            expiresIn: '15m',
        })

        user.resetLink = token

        //*Guardo token en la la base de datos
        updateUserService(_id, user) //Todo: Revisar validaciones de llamadas...

        //* Mando email con codigo nuevo
        await sendForgotPasswordEmail(user.email, baseUrl, token)

        return res.status(200).json({
            ok: true,
            msg: 'Las instrucciones para resetear su contraseña fueron enviadas por mail',
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}

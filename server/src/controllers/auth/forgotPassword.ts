import { Request, Response } from 'express'

import { IResponse } from '../../interfaces/response'
import { getUserByEmailService } from './../../services'
import { generateCode, sendWelcomeEmail } from '../../utils'
import { updateUserService } from '../../services'

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

        //*Genero nuevo codigo y lo cambio en el usuario
        const code = generateCode()
        user.code = code

        //* Actualizo el usuario con el nuevo codigo
        await updateUserService(user.id, user)

        //* Mando email con codigo nuevo
        await sendWelcomeEmail(user.fullname, user.code, user.email)

        return res.status(200).json({
            ok: true,
            msg: 'Su codigo ha sido reenviado a su casilla de correo',
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}

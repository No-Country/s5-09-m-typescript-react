import { sendWelcomeEmail } from './../../utils/sendWelcomeEmail'
import { Request, Response } from 'express'
import { getUserByEmailService } from '../../services/user/getUserByEmailService'
import { IResponse } from '../../interfaces/response'

export const resendCode = async (req: Request, res: Response) => {
    const { email } = req.body

    try {
        const response = await getUserByEmailService(email)
        const { ok, user } = response as IResponse

        if (ok) {
            await sendWelcomeEmail(user.fullname, user.code, user.email)
            return res.status(200).json({
                ok: true,
                msg: 'Su codigo ha sido reenviado a su casilla de correo',
            })
        }

        return res.status(404).json({
            ok: false,
            msg: 'No existe usuario registrado con ese email',
        })
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, msg: 'El email no pude ser enviado' })
    }
}

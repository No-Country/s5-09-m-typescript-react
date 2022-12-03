import { Request, Response } from 'express'

import { IResponse } from '../../interfaces/response'
import bcryptjs from 'bcryptjs'
import { updateUserService, getUserByIdService } from '../../services'

export const resetPassword = async (req: Request, res: Response) => {
    const token = req.header('token')
    const newPassword = req.body.password
    const id = req.id

    try {
        const response = await getUserByIdService(id)
        const { ok, user } = response as IResponse

        if (ok === false)
            return res
                .status(404)
                .json({ ok: false, msg: 'El usuario no fue encontrado' })

        if (ok === true && user.resetLink !== token) {
            return res.status(404).json({
                ok: false,
                msg: 'El token no corresponde con el habiltado al usuario para modificar contraseña',
            })
        }

        //*Encripto contraseña nueva
        const salt = bcryptjs.genSaltSync()
        const hashPassword = bcryptjs.hashSync(newPassword, salt)

        //*Modifico la contraseña con el hash de la nueva, reseteo link de token para invalidar y cambio datos usuario
        //! Recordar que el link de token sirve una vez, por eso se reinicia a vacio!!
        user.password = hashPassword
        user.resetLink = ''

        await updateUserService(id, user)

        return res
            .status(200)
            .json({ ok: true, msg: 'Contraseña cambiada con exito' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}

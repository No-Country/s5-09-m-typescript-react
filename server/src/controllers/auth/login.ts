import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'

import { loginService } from '../../services/auth/loginService'
import { generateJwt, validatePassword } from '../../utils'

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    //Todo: Validar que el mail del usuario este verificado!!!

    try {
        const { ok, msg, status, user, code, id } = (await loginService(
            email
        )) as IResponse

        //*Comprobar que el email este en la base de datos
        if (!ok && msg === 'El email no esta registrado') {
            return res.status(status).json({ ok: false, msg: msg })
        }

        //*Comprobar que este verificado el usuario
        if (!ok && msg === 'El email no esta verificado') {
            return res.status(status).json({ ok: false, msg: msg, code, id })
        }

        //* Comprobar que las contraseñas coincidan
        const validPassword = await validatePassword(password, user.password)

        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: 'Password Incorrecta',
            })
        }

        //*Creo token del usuario
        const token = await generateJwt(user._id, user.admin)

        return res.status(200).json({
            ok: true,
            msg: 'Usuario logeado',
            token,
            id: user._id,
            admin: user.admin,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}

import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { secretKey } from '../config'
import { IPayload } from '../interfaces/jwtPayload'

//!Falta testear y decidir rutas de acceso a admins

export const validateAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //*Recibo por headers el token
    const token = req.header('token')

    try {
        if (token === undefined) {
            return res.status(401).json({
                ok: false,
                msg: 'Accesso denegado',
                error: 'El token no ha sido enviado',
            })
        }

        const payload = jwt.verify(token, secretKey) as IPayload

        const isAdmin = payload.admin
        //*Compruebo que sea usuario el usuario
        if (!isAdmin) {
            return res.status(404).json({
                ok: false,
                msg: 'Acceso denegado',
                error: 'Usuario sin privilegios de admin',
            })
        }

        return next()
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'Token inválido',
        })
    }
}

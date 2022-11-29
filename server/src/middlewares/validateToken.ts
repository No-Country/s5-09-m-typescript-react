import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { secretKey } from '../config'
import { IPayload } from '../interfaces/jwtPayload'

export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header('token')

    try {
        if (token === undefined) {
            return res.status(401).json({
                ok: false,
                msg: 'Accesso Denegado',
                error: 'No se ha enviado token',
            })
        }

        const payload = jwt.verify(token, secretKey) as IPayload

        req.id = payload.id
        req.admin = payload.admin

        return next()
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Token Inválido',
            error,
        })
    }
}

import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const validateLoginGoogle = [
    body('email')
        .notEmpty()
        .withMessage('El email es requerido')
        .isEmail()
        .withMessage('Email inválido'),
    body('picture')
        .notEmpty()
        .withMessage('La foto es requerida')
        .isURL()
        .withMessage('El email tiene que ser una Url'),
    body('name')
        .notEmpty()
        .withMessage('El nombre completo es requerido')
        .isString()
        .withMessage('El nombre completo debe ser de tipo string'),
    body('sub')
        .notEmpty()
        .withMessage('El dato sub es requerido')
        .isString()
        .withMessage('El dato sub debe ser un string'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        return next()
    },
]

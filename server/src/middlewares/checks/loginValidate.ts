import { Response, Request, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export const validateLogin = [
    body('email')
        .notEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Email invalid'),
    body('password')
        .isStrongPassword()
        .withMessage(
            'La contraseña debe contener min 8 carácteres, 1 minúscula(min), 1 mayúscula(min), 1 numero(min), 1 simbolo(min) '
        ),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        return next()
    },
]

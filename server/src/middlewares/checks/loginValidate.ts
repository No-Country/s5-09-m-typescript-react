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
            'The Password has to contain min 8 chars, 1 lowercase(min), 1 uppercase(min), 1 number(min), 1 symbol(min) '
        ),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(403).json({ ok: false, error: errors.array() })
        }
        return next()
    },
]

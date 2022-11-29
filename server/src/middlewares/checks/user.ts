import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

export const validateCreateUser = [
    check('fullname', 'el fullname name debe existir').exists(),
    check('fullname', 'el fullname name no debe estar vacio').notEmpty(),
    check('fullname', 'el fullname name debe ser de tipo string').isString(),

    check('email', 'el campo email debe existir').exists(),
    check('email', 'el campo email no debe estar vacio').notEmpty(),
    check('email', 'el campo email debe ser un email').isEmail(),
    check('email', 'el email debe ser de tipo string').isString(),

    check('password', 'el campo password debe existir').exists(),
    check('password', 'el campo password no debe estar vacio').notEmpty(),
    check('password', 'el campo password debe ser de tipo string').isString(),
    check(
        'password',
        'el campo password debe tener minimo 8 caracteres y contener al menos una mayuscula, una minuscula y un caracter especial.'
    )
        .isLength({ min: 8 })
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ error: errors.array() })
        }
        return next()
    },
]

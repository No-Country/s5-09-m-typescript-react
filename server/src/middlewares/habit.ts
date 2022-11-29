import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import { Types } from 'mongoose'

export const validateCreateHabit = [
    check('name', 'el campo name debe existir').exists(),
    check('name', 'el campo name no debe estar vacio').notEmpty(),
    check('name', 'el campo name debe ser de tipo string').isString(),

    check('img', 'el campo img debe existir').exists(),
    check('img', 'el campo img no debe estar vacio').notEmpty(),
    check('img', 'el campo img debe ser de tipo string').isString(),

    check('description', 'el campo description debe existir').exists(),
    check('description', 'el campo description no debe estar vacio').notEmpty(),
    check(
        'description',
        'el campo description debe ser de tipo string'
    ).isString(),

    check('category', 'el campo category debe existir').exists(),
    check('category', 'el campo category no debe estar vacio').notEmpty(),
    check('category').custom((value) => {
        if (!Types.ObjectId.isValid(value)) {
            throw new Error('Debes ingresar un ObjectId valido')
        }
        return true
    }),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(403).json({ error: errors.array() })
        }
        return next()
    },
]

import express from 'express'
import { resetPasswordValidate } from '../middlewares/checks/resetPasswordValidate'

import {
    login,
    googleLogin,
    renewToken,
    forgotPassword,
    resetPassword,
} from '../controllers'

import {
    validateToken,
    validateLoginGoogle,
    validateLogin,
} from './../middlewares'

const router = express.Router()

router.post('/login', validateLogin, login)
router.post('/googleLogin', validateLoginGoogle, googleLogin)
router.post('/renewToken', validateToken, renewToken)
router.post('/forgotPassword', forgotPassword)
router.post(
    '/resetPassword',
    validateToken,
    resetPasswordValidate,
    resetPassword
)

export default router

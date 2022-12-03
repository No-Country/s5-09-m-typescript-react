import express from 'express'

import { login, googleLogin, renewToken, forgotPassword } from '../controllers'

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

export default router

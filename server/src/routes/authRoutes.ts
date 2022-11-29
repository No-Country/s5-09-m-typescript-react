import express from 'express'

import { login, googleLogin, renewToken } from '../controllers'
import {
    validateToken,
    validateLoginGoogle,
    validateLogin,
} from './../middlewares'

const router = express.Router()

router.post('/login', validateLogin, login)
router.post('/googleLogin', validateLoginGoogle, googleLogin)
router.post('/renewToken', validateToken, renewToken)

export default router

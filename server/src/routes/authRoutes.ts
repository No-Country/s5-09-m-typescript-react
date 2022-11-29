import express from 'express'

import { login, googleLogin, renewToken } from '../controllers'
import { validateToken } from './../middlewares/validateToken'

const router = express.Router()

router.post('/login', login) //TODO hacer validaciones de datos con validate express
router.post('/googleLogin', googleLogin)
router.post('/renewToken', validateToken, renewToken)

export default router

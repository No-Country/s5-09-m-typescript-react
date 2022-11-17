import express from 'express'
import { login, googleLogin } from '../controllers/auth'

const router = express.Router()

router.post('/login', login) //TODO hacer validaciones de datos con validate express
router.post('/googleLogin', googleLogin)

export default router

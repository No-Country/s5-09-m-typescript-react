import express from 'express'
import { resendCode, sendContactEmail } from '../controllers'

const router = express.Router()

router.post('/sendContact', sendContactEmail) //Todo: armar middlewares y validaciones
router.post('/resendCode', resendCode)

export default router

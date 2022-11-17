import express from 'express'
import { sendContactEmail } from '../controllers'

const router = express.Router()

router.post('/sendContact', sendContactEmail) //Todo: armar middlewares y validaciones

export default router

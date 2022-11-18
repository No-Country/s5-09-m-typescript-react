import express from 'express'
import emailRoutes from './emailingRoutes'
import userRoutes from './userRoutes'
import authRoutes from './authRoutes'

const router = express.Router()

router.use('/', emailRoutes)
router.use('/user', userRoutes)
router.use('/', authRoutes)

export { router }

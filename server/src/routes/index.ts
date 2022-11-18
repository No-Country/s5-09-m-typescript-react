import express from 'express'
import emailRoutes from './emailingRoutes'
import userRoutes from './userRoutes'
import authRoutes from './authRoutes'
import habitsRoutes from './habitRoutes'
import categoryRoutes from './categoryRoutes'

const router = express.Router()

router.use('/', emailRoutes)
router.use('/user', userRoutes)
router.use('/', authRoutes)
router.use('/habit', habitsRoutes)
router.use('/category', categoryRoutes)

export { router }

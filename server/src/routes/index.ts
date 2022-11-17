import express from 'express'
import emailRoutes from './emailingRoutes'
import userRoutes from './userRoutes'

const router = express.Router()

router.use('/', emailRoutes)
router.use('/user', userRoutes)

export { router }

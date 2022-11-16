import express from 'express'
import emailRoutes from './emailingRoutes'

const router = express.Router()

router.use('/', emailRoutes)

export { router }

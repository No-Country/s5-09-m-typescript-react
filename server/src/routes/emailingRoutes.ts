import express, { Response } from 'express'

const router = express.Router()

router.get('/prueba', async (_req, res: Response) => {
    return res.json({ msg: 'Todo bien' })
})

export default router

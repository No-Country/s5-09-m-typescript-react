import express from 'express'

import {
    getHabits,
    getHabit,
    createHabit,
    updateHabit,
    deleteHabit,
} from '../controllers'
import { validateCreateHabit } from '../middlewares'

const router = express.Router()

router.get('/', getHabits)
router.get('/:id', getHabit)
router.post('/', validateCreateHabit, createHabit)
router.put('/:id', updateHabit)
router.delete('/:id', deleteHabit)

export default router

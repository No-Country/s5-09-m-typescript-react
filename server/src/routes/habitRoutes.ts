import express from 'express'

import {
    getHabits,
    getHabit,
    createHabit,
    updateHabit,
    deleteHabit,
} from '../controllers'
import { validateCreateHabit } from '../middlewares'
import { validateAdmin } from '../middlewares/validateAdmin'

const router = express.Router()

router.get('/', getHabits)
router.get('/:id', getHabit)
router.post('/', validateAdmin, validateCreateHabit, createHabit)
router.put('/:id', validateAdmin, updateHabit)
router.delete('/:id', validateAdmin, deleteHabit)

export default router

import express from 'express'
const router = express.Router()
import { getHabits } from '../controllers/habit/getHabits'
import { getHabit } from '../controllers/habit/getHabit'
import { createHabit } from '../controllers/habit/createHabit'

router.get('/', getHabits)
router.get('/:id', getHabit)
router.post('/', createHabit)

export default router

import express from 'express'
import { getHabits } from '../controllers/habit/getHabits'
import { getHabit } from '../controllers/habit/getHabit'
import { createHabit } from '../controllers/habit/createHabit'
import { updateHabit } from '../controllers/habit/updateHabit'
import { deleteHabit } from '../controllers/habit/deleteHabit'

const router = express.Router()

router.get('/', getHabits)
router.get('/:id', getHabit)
router.post('/', createHabit)
router.put('/:id', updateHabit)
router.delete('/:id', deleteHabit)


export default router

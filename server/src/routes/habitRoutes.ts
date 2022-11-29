import express from 'express'
import { getHabits } from '../controllers/habit/getHabits'
import { getHabit } from '../controllers/habit/getHabit'
import { createHabit } from '../controllers/habit/createHabit'
import { updateHabit } from '../controllers/habit/updateHabit'
import { deleteHabit } from '../controllers/habit/deleteHabit'
import { validateCreateHabit } from '../middlewares/habit'

const router = express.Router()

router.get('/', getHabits)
router.get('/:id', getHabit)
router.post('/',validateCreateHabit, createHabit)
router.put('/:id', updateHabit)
router.delete('/:id', deleteHabit)


export default router

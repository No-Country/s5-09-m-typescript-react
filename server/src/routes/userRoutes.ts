import express from 'express'

import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from '../controllers'
import { validateToken } from '../middlewares'
import { validateCreateUser } from '../middlewares/checks/user'

const router = express.Router()

router.post('/', validateCreateUser, createUser)
router.get('/', getUsers)
router.get('/findOne/:id', validateToken, getUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router

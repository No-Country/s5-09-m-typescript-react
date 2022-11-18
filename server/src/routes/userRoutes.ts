import express from 'express'
const router = express.Router()
import { createUser } from '../controllers/user/createUser'
import { getUsers } from '../controllers/user/getUsers'
import { getUser } from '../controllers/user/getUser'
import { updateUser } from '../controllers/user/updateUser'
import { deleteUser } from '../controllers/user/deleteUser'

router.post('/', createUser)
router.get('/', getUsers)
router.get('/findOne/:id', getUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router

import User from '../../models/User'
import { createUser } from '../users'
import users from '../../utils/mockups/users.json'

export const userMocksService = async () => {
    const isUser = await User.findOne()

    if (!isUser) {
        users.forEach(async (user) => {
            try {
                await createUser(user)
            } catch (error) {
                return error
            }
        })
    }
}

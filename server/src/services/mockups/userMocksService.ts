import User from '../../models/User'
import { createUserService } from '../user/createUser'
import users from '../../utils/mockups/users.json'

export const userMocksService = async () => {
    const isUser = await User.findOne()

    if (!isUser) {
        users.forEach(async (user) => {
            try {
                await createUserService(user)
            } catch (error) {
                return error
            }
        })
    }
}

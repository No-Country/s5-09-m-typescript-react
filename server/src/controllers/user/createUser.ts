import { Response, Request } from 'express'
import * as userService from '../../services/users'

export const createUser = async (req: Request, res: Response) => {
    const user = req.body

    try {
        const userRetrieved: any = await userService.createUser(user)
        const { status } = userRetrieved

        res.status(status).json(userRetrieved)
    } catch (error) {
        return error
    }
}

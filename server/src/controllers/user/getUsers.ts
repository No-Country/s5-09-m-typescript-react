import { Response, Request } from 'express'
import * as userService from '../../services/users'

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const usersRetrieved: any = await userService.getUsers()
        const { status } = usersRetrieved

        res.status(status).send({
            usersRetrieved,
        })
    } catch (error) {
        return error
    }
}

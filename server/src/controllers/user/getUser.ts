import { Response, Request } from 'express'
import * as userService from '../../services/users'

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const userRetrieved: any = await userService.getUser(id)
        const { status } = userRetrieved
        res.status(status).send({
            userRetrieved,
        })
    } catch (error) {
        return error
    }
}

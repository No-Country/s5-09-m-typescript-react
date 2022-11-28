import { Response, Request } from 'express'
import { IResponse } from '../../interfaces'
import { getUsersService } from '../../services/user/getUsers'
/* import * as userService from '../../services/users'
 */

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const usersRetrieved = (await getUsersService()) as IResponse
        const { status } = usersRetrieved

        return res.status(status).send({
            usersRetrieved,
        })
    } catch (error) {
        return res.status(500).send({
            error,
        })
    }
}

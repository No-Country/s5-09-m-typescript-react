import { Response, Request } from 'express'
import { IResponse } from '../../interfaces'
import { createUserService } from '../../services/user/createUser'
/* import * as userService from '../../services/users'
 */
export const createUser = async (req: Request, res: Response) => {
    const user = req.body

    try {
        const userRetrieved = (await createUserService(user)) as IResponse

        const { status } = userRetrieved

        return res.status(status).json(userRetrieved)
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}

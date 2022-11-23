import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { updateUserService } from '../../services/user/updateUser'
/* import * as userService from '../../services/users'
 */
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req

    try {
        const userRetrieved = (await updateUserService(id, body)) as IResponse
        const { status } = userRetrieved

        return res.status(status).json({
            userRetrieved,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error,
        })
    }
}

import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { deleteUserService } from '../../services/user/deleteUser'
/* import * as userService from '../../services/users'
 */
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const userRetrieved = (await deleteUserService(id)) as IResponse
        const { status } = userRetrieved
        return res.status(status).json({
            userRetrieved,
        })
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}

import { Response, Request } from 'express'
import { IResponse } from '../../interfaces'
import { getUserService } from '../../services/user/getUser'
/* import * as userService from '../../services/users'
 */
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const userRetrieved = (await getUserService(id)) as IResponse

        const { status } = userRetrieved
        return res.status(status).json(userRetrieved)
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        })
    }
}

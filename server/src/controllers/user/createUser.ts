import { Response, Request } from 'express'
import * as userService from '../../services/users'

export const createUser = async (req: Request, res: Response) => {
    const user = req.body

    try {
        const userRetrieved: any = await userService.createUser(user) //! SOLUCIONAR PROBLEMA DE TIPADO

        const { status } = userRetrieved

        return res.status(status).json(userRetrieved)
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}

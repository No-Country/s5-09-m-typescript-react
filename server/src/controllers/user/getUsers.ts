import { Response, Request } from 'express'
import * as userService from '../../services/users'

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const usersRetrieved: any = await userService.getUsers() //! SOLUCIONAR PROBLEMA DE TIPADO
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

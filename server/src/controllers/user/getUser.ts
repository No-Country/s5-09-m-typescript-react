import { Response, Request } from 'express'
import * as userService from '../../services/users'

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const userRetrieved: any = await userService.getUser(id) //! SOLUCIONAR PROBLEMA DE TIPADO
        const { status } = userRetrieved
        return res.status(status).json(userRetrieved)
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        })
    }
}

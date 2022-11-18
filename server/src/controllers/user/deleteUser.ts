import { Request, Response } from 'express'
import * as userService from '../../services/users'

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const userRetrieved: any = await userService.deleteUser(id) //! SOLUCIONAR PROBLEMA DE TIPADO
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

import { Request, Response } from 'express'
import * as userService from '../../services/users'

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req

    try {
        const userRetrieved: any = await userService.updateUser(id, body) //! SOLUCIONAR PROBLEMA DE TIPADO
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

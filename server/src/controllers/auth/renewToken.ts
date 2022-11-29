import { Request, Response } from 'express'
import { generateJwt } from '../../utils/generateJwt'

export const renewToken = async (req: Request, res: Response) => {
    const admin = req.admin
    const id = req.id
    try {
        //* Generar nuevo token
        const token = await generateJwt(id, admin)

        return res.status(200).json({ ok: true, id, admin, token: token })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error, contacta con un administrador',
            error,
        })
    }
}

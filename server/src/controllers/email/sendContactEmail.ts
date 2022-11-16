import { Request, Response } from 'express'
import { sendEmail } from '../../config/mailer'
import { nodemailerApi } from '../../config'

export const sendContactEmail = async (req: Request, res: Response) => {
    const { fullName, email, text } = req.body
    console.log(fullName, email) //! Esto esta pendiente porque es info que se muestra en el html que aun falta

    try {
        await sendEmail(nodemailerApi, text, 'Contact Form') //Todo: Hacer la funcion que retorna el html mandando los datos del usuario

        res.json({ ok: true, msg: 'Mensaje Enviado!' })
    } catch (error) {
        console.log(error) //* Sacar cuando finalice, solo usar mientras pruebo para ver errores consola
        res.status(400).json({ ok: false, msg: 'El email no pude ser enviado' })
    }
}

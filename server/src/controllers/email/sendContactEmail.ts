import { Request, Response } from 'express'
import { sendEmail } from '../../config/mailer'
import { nodemailerApi } from '../../config'
import getContactTemplate from '../../utils/getContactTemplate'

export const sendContactEmail = async (req: Request, res: Response) => {
    const { fullName, email, text } = req.body

    try {
        await sendEmail(
            nodemailerApi,
            getContactTemplate(fullName, email, text),
            'Contact Form'
        )

        return res.json({ ok: true, msg: 'Mensaje Enviado!' })
    } catch (error) {
        return res
            .status(500)
            .json({ ok: false, msg: 'El email no pude ser enviado' })
    }
}

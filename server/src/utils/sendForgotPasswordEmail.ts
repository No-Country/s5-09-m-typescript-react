import { sendEmail } from '../config/mailer'
import { getForgotPasswordTemplate } from './getForgotPasswordTemplate'

export const sendForgotPasswordEmail = async (
    email: string,
    baseUrl: string,
    token: string
) => {
    try {
        await sendEmail(
            email,
            getForgotPasswordTemplate(baseUrl, token),
            'Recuperación de Contraseña'
        )
    } catch (error) {
        return error
    }
}

import { sendEmail } from '../config'
import getWelcomeEmail from './getWelcomeEmail'

export const sendWelcomeEmail = async (
    fullname: string,
    code: number,
    email: string
) => {
    try {
        await sendEmail(email, getWelcomeEmail(fullname, code), 'Bienvenida')
    } catch (error) {
        return error
    }
}

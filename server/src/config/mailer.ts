import { nodemailerApi, nodemailerPassword } from './globals'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: nodemailerApi,
        pass: nodemailerPassword,
    },
})

export const sendEmail = async (
    email: string = nodemailerApi,
    template: string,
    sub: string
) => {
    try {
        await transporter.sendMail({
            from: `MindFulness <${nodemailerApi}>`, // sender address
            to: email, // list of receivers
            subject: sub, // Subject line
            text: sub, // plain text body
            html: template, // html body
        })
    } catch (error) {
        return error
    }
}

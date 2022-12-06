import dotenv from 'dotenv'

dotenv.config()

export const dbTest: string = process.env.DB_TESTING || ''
export const dbDev: string = process.env.DB_DEVELOPMENT || ''
export const portTest = process.env.PORT_TESTING || process.env.PORT
export const portDev = process.env.PORT_DEVELOPMENT || process.env.PORT
export const nodemailerApi = process.env.NODEMAILER_API || ''
export const nodemailerPassword = process.env.NODEMAILER_PASS || ''
export const secretKey = process.env.SECRET_KEY || ''
export const baseUrl: string = process.env.BASE_URL || 'http://localhost:3000'
export const mailchimpApiKey = process.env.API_KEY_MAILCHIMP || ''
export const mailchimpAudience = process.env.AUDIENCE_ID_MAILCHIMP || ''

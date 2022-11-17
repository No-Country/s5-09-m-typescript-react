import dotenv from 'dotenv'

dotenv.config()

export const dbTest: string = process.env.DB_TESTING || ''
export const dbDev: string = process.env.DB_DEVELOPMENT || ''
export const portTest = process.env.PORT_TESTING || ''
export const portDev = process.env.PORT_DEVELOPMENT || ''
export const nodemailerApi = process.env.NODEMAILER_API || ''
export const nodemailerPassword = process.env.NODEMAILER_PASS || ''

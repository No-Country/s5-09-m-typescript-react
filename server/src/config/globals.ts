import dotenv from 'dotenv'

dotenv.config()

export const dbTest: string = process.env.DB_TESTING || ''
export const dbDev: string = process.env.DB_DEVELOPMENT || ''
export const porTest = process.env.PORT_TESTING || ''
export const portDev = process.env.PORT_DEVELOPMENT || ''

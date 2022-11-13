import express from 'express'
import mongoose from 'mongoose'
import { dbTest, dbDev, portDev, porTest } from './config/globals'
const app = express()

const db = process.env.NODE_ENV === 'development' ? dbDev : dbTest

const port = process.env.NODE_ENV === 'development' ? portDev : porTest

app.listen(port, async () => {
    console.log(`Server listening on port: ${port}`)
})

const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('Connection successfully')
    } catch (error) {
        console.error('Failed to connect to MongoDB')
    }
}

connectDB()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { router } from './routes/index'
import { dbTest, dbDev, portDev, portTest } from './config/globals'
import { userMocksService } from './services'

const db = process.env.NODE_ENV === 'development' ? dbDev : dbTest

const port = process.env.NODE_ENV === 'development' ? portDev : portTest

//* ----------------Server configuration -----------------
const app = express()
app.use(express.json())
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', router)

// * ----------Connection Local ------------
app.listen(port, async () => {
    userMocksService()
    console.log(`Server listening on port: ${port}`)
})

// * ----------Connection with Mongo Atlas ------------

const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('Connection successfully')
    } catch (error) {
        console.error('Failed to connect to MongoDB')
    }
}

connectDB()

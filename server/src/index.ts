import express from 'express'
import mongoose from 'mongoose'

const app = express()

const port = 3001

const db =
    'mongodb+srv://mindfulness:XaFsu5kq8xLet3P@cluster0.j4zvqvm.mongodb.net/test'

const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('Connection successfully')
    } catch (error) {
        console.error('Failed to connect to MongoDB')
    }
}

connectDB()

app.listen(port, async () => {
    console.log(`Server listening on port: ${port}`)
})

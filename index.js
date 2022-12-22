import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.wl2dkah.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', router)

app.use(express.json())

async function startApp() { 
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()


// app.get('/', (req, res) => {
//     res.status(200).json("Server Workde")
// })
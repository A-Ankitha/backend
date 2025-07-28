
const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors())

const {task} = require('../routes/route');
require('../connect/connect')

app.use('/api/tasks',task)

require('dotenv').config()

const port = process.env.PORT

const connectDB = require('../connect/connect')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
        console.log(`listening at port ${port}`)
})
    } catch (error) {
        console.log("DB is not connected")
    }
}
start()

require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

app.use(express.json())

// connecting to database
const connectToDB = require('./dbConnection')
connectToDB(MONGO_URI)

//Routes 
const blogRoute = require('./routes/blog')

app.use('/api/posts', blogRoute)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
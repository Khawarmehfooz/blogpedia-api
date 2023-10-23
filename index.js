require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const { checkForAuthCookie } = require('./middlewares/auth')
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(checkForAuthCookie('token'))

// connecting to database	
const connectToDB = require('./dbConnection')
connectToDB(MONGO_URI)

//Routes 	
const blogRoute = require('./routes/blog')
const userRoute = require('./routes/user')
const commentRoute = require('./routes/comment')

app.use('/api/posts', blogRoute)
app.use('/api/users', userRoute)
app.use('/api/comment', commentRoute)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
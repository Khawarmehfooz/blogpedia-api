require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
// connect mongodb
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((e) => {
    console.log("MongoDB Connected")
})

const userRoute = require('./routes/user')

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.get('/', (req, res) => {
    res.render('index')
})
app.use('/user', userRoute)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
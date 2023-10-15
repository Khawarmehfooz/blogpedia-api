require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
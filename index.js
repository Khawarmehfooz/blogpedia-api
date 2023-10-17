require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.resolve('dist')))
app.set('views', path.resolve('./views'))
app.set('view engine', 'ejs')
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
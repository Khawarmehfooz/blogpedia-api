const { Router } = require('express')
const User = require('../models/user')
const router = Router()
const { handleSignIn, handleSignUp } = require('../controllers/user')

router.get('/signin', (req, res) => {
    return res.render('signin')
})

router.get('/signup', (req, res) => {
    return res.render('signup')
})

router.post('/signin', handleSignIn)

router.post('/signup', handleSignUp)

router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/')
})
module.exports = router;

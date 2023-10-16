const User = require('../models/user')
async function handleSignIn(req, res) {
    try {
        const { email, password } = req.body
        const token = await User.matchPasswordAndGenerateToken(email, password)

        return res.cookie('token', token).redirect('/')
    } catch (err) {
        return res.render('signin', {
            error: "Incorrect Email or Password"
        })
    }
}
async function handleSignUp(req, res) {
    const { fullName, email, password } = req.body
    await User.create({
        fullName,
        email,
        password
    })
    return res.redirect('/')
}
module.exports = {
    handleSignIn,
    handleSignUp
}
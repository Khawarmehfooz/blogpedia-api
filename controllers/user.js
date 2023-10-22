const User = require('../models/user')
async function handleUserSignUp(req, res) {
    try {
        const { fullName, email, password } = req.body
        console.log(req.body)
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageURL: `/uploads/userProfileImages/${req.file.filename}`
        })
        return res.json(user)
    } catch (err) {
        console.log(err)
    }
}
async function handleUserSignIn(req, res) {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user.password !== password) {
            return res.send('Invalid Email or password')
        }
        res.json(user)
    } catch (err) {
        console.log(err)
    }
}
async function handleGetUserById(req, res) {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.json(user)
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    handleUserSignUp,
    handleUserSignIn,
    handleGetUserById
}
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
async function handleUserUpdate(req, res) {
    try {
        const id = req.params.id
        const userToUpdate = await User.findOne({ _id: id })
        if (!userToUpdate) {
            return res.send('No User Found')
        }
        const { fullName, email } = req.body
        let profileImageURL;
        if (req.file) {
            profileImageURL = `/uploads/userProfileImages/${req.file.filename}`
        } else {
            profileImageURL = userToUpdate.profileImageURL
        }
        await User.findByIdAndUpdate(id, {
            fullName,
            email,
            profileImageURL
        })
        res.send('User Updated')
    } catch (err) {
        console.log(err)
    }
}
async function handleUserDeletion(req, res) {
    try {
        const id = req.params.id
        const userToDelete = await User.findById(id)
        if (!userToDelete) {
            return res.status(404).send("No User Found")
        }
        await User.findByIdAndDelete(id)
        res.send('User Deleted')
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    handleUserSignUp,
    handleUserSignIn,
    handleGetUserById,
    handleUserUpdate,
    handleUserDeletion
}
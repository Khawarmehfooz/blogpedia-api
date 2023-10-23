const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const { createTokenForUser, validateToken } = require('../services/auth')
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true
    }, profileImageURL: {
        type: String,
        required: false
    }
}, { timestamps: true })

userSchema.pre('save', function (next) {
    const user = this
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) return next(hashError)
                    user.password = hash
                    next()
                })
            }
        })
    } else {
        return next()
    }
})
userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) throw new Error('User Not Found')
    const hashedPassword = user.password
    const userProvidedPassword = password
    bcrypt.compare(userProvidedPassword, hashedPassword, function (err, isMatch) {
        if (err) {
            throw err
        } else if (!isMatch) {
            console.log("Password doesn't match")
        } else {
            console.log("password match")
            const token = createTokenForUser(user)
            console.log(token)
            return token
        }
    })
})
const User = model('user', userSchema)
module.exports = User
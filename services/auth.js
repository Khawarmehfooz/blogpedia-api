const jwt = require('jsonwebtoken')
const SECRET_TOKEN = process.env.SECRET_TOKEN
function createTokenForUser(user) {
    const payLoad = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email
    }
    const token = jwt.sign(payLoad, SECRET_TOKEN)
    return token
}
function validateToken(token) {
    const payLoad = jwt.verify(token, SECRET_TOKEN)
    return payLoad
}
module.exports = {
    createTokenForUser,
    validateToken,
}
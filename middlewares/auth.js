const { validateToken } = require("../services/auth")

function checkForAuthCookie(cookie) {
    return (req, res, next) => {
        const cookieTokenValue = req.cookies[cookie]
        if (!cookieTokenValue) {
            return next()
        }
        try {
            const userPayLoad = validateToken(cookieTokenValue)
            req.user = userPayLoad
        } catch (err) { }
        return next()
    }
}
module.exports = {
    checkForAuthCookie,
}
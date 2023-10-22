const { Router } = require('express')
const router = Router()
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads/userProfileImages`))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
    }
})
const upload = multer({ storage: storage })

const { handleUserSignUp, handleUserSignIn, handleGetUserById } = require('../controllers/user')
router.post('/signup', upload.single('profileImage'), handleUserSignUp)
router.post('/signin', handleUserSignIn)
router.get('/:id', handleGetUserById)

module.exports = router
const { Router } = require('express')
const multer = require('multer')
const path = require('path')
const router = Router()

const { handleCreateBlogPost, getBlogPostAndCommentsById, handlePostComment } = require('../controllers/blog')

const Blog = require('../models/blog')
const Comment = require('../models/comment')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads`))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })

router.get('/add-new', (req, res) => {
    return res.render('addBlog', {
        user: req.user
    })
})

router.post('/', upload.single('coverImage'), handleCreateBlogPost)

router.get('/:id', getBlogPostAndCommentsById)

router.post('/comment/:blogId', handlePostComment)

module.exports = router
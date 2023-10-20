const { Router } = require('express')
const path = require('path')
const multer = require('multer')
const router = Router()

const { handleCreateBlogPost, handleGetAllPosts, handleGetPostById, handleUpdatePost, handleDeleteBlogPost } = require('../controllers/blog')

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

router.post('/', upload.single('coverImage'), handleCreateBlogPost)
router.get('/', handleGetAllPosts)
router.get('/:id', handleGetPostById)
router.put('/:id', handleUpdatePost)
router.delete('/:id', handleDeleteBlogPost)

module.exports = router
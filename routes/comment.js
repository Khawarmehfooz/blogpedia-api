const { Router } = require('express')
const router = Router()

const { handlePostComment, handleGetCommentById } = require('../controllers/comment')

router.post('/:blogId', handlePostComment)
router.get('/:id', handleGetCommentById)


module.exports = router
const { Router } = require('express')
const router = Router()

const { handlePostComment } = require('../controllers/comment')

router.post('/:blogId', handlePostComment)


module.exports = router
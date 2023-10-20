const { Router } = require('express')
const path = require('path')
const router = Router()

const { handleCreateBlogPost } = require('../controllers/blog')

router.post('/', handleCreateBlogPost)

module.exports = router
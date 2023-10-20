const { Router } = require('express')
const path = require('path')
const router = Router()

const { handleCreateBlogPost, handleGetAllPosts } = require('../controllers/blog')

router.post('/', handleCreateBlogPost)
router.get('/', handleGetAllPosts)

module.exports = router
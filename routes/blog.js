const { Router } = require('express')
const path = require('path')
const router = Router()

const { handleCreateBlogPost, handleGetAllPosts, handleGetPostById } = require('../controllers/blog')

router.post('/', handleCreateBlogPost)
router.get('/', handleGetAllPosts)
router.get('/:id', handleGetPostById)

module.exports = router
const { Router } = require('express')
const path = require('path')
const router = Router()

const { handleCreateBlogPost, handleGetAllPosts, handleGetPostById, handleUpdatePost } = require('../controllers/blog')

router.post('/', handleCreateBlogPost)
router.get('/', handleGetAllPosts)
router.get('/:id', handleGetPostById)
router.put('/:id', handleUpdatePost)

module.exports = router
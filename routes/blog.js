const { Router } = require('express')
const path = require('path')
const router = Router()

const { handleCreateBlogPost, handleGetAllPosts, handleGetPostById, handleUpdatePost, handleDeleteBlogPost } = require('../controllers/blog')

router.post('/', handleCreateBlogPost)
router.get('/', handleGetAllPosts)
router.get('/:id', handleGetPostById)
router.put('/:id', handleUpdatePost)
router.delete('/:id', handleDeleteBlogPost)

module.exports = router
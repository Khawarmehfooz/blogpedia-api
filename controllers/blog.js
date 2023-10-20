const Blog = require('../models/blog')
async function handleCreateBlogPost(req, res) {
    const { title, body } = req.body
    const blog = await Blog.create({
        title,
        body,
        coverImageURL: '/uploads/blog.png'
    })
    res.send('Post Created')
}
async function handleGetAllPosts(req, res) {
    const allPosts = await Blog.find({})
    res.json(allPosts)
}
async function handleGetPostById(req, res) {
    const id = req.params.id
    const blogPost = await Blog.findById(id)
    res.json(blogPost)
}
async function handleUpdatePost(req, res) {
    const id = req.params.id
    const { title, body } = req.body
    await Blog.findByIdAndUpdate(id, {
        title,
        body
    })
    res.send('Post Updated')
}
async function handleDeleteBlogPost(req, res) {
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.send('Post Deleted')
}
module.exports = {
    handleCreateBlogPost,
    handleGetAllPosts,
    handleGetPostById,
    handleUpdatePost,
    handleDeleteBlogPost
}
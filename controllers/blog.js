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

module.exports = {
    handleCreateBlogPost,
    handleGetAllPosts
}
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

module.exports = {
    handleCreateBlogPost,
}
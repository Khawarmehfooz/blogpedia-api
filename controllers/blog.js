const Blog = require('../models/blog')

async function handleCreateBlogPost(req, res) {
    try {
        const { title, body } = req.body
        const blog = await Blog.create({
            title,
            body,
            coverImageURL: `/uploads/${req.file.filename}`
        })
        res.send('Post Created')
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error')
    }
}

async function handleGetAllPosts(req, res) {
    try {
        const allPosts = await Blog.find({})
        res.json(allPosts)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error')
    }
}
async function handleGetPostById(req, res) {
    try {
        const id = req.params.id
        const blogPost = await Blog.findById(id)
        res.json(blogPost)
    } catch (err) {
        res.status(400).send('Server Error')
    }
}

async function handleUpdatePost(req, res) {
    try {

        const id = req.params.id
        const { title, body } = req.body
        await Blog.findByIdAndUpdate(id, {
            title,
            body
        })
        res.send('Post Updated')
    } catch (err) {
        console.log(err)
        res.status(500).json('Server Error')
    }
}

async function handleDeleteBlogPost(req, res) {
    try {
        const id = req.params.id
        await Blog.findByIdAndDelete(id)
        res.send('Post Deleted')
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
    }
}

module.exports = {
    handleCreateBlogPost,
    handleGetAllPosts,
    handleGetPostById,
    handleUpdatePost,
    handleDeleteBlogPost
}
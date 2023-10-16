const Blog = require('../models/blog')
const Comment = require('../models/comment')

async function handleCreateBlogPost(req, res) {
    const { title, body } = req.body
    const blog = await Blog.create({
        title,
        body,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`
    })
    res.redirect(`/`)
}
async function getBlogPostAndCommentsById(req, res) {
    const id = req.params.id;
    const blog = await Blog.findById(id).populate('createdBy')
    const comments = await Comment.find({ blogId: id }).populate('createdBy')
    res.render('viewBlog', {
        user: req.user,
        blog,
        comments
    })
}
async function handlePostComment(req, res) {
    await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id
    })
    return res.redirect(`/blog/${req.params.blogId}`)
}
module.exports = {
    handleCreateBlogPost,
    getBlogPostAndCommentsById,
    handlePostComment

}
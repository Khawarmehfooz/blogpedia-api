
const Blog = require('../models/blog')
const Comment = require('../models/comment')

async function handlePostComment(req, res) {
    try {
        await Comment.create({
            content: req.body.content,
            blogId: req.params.blogId,
            createdBy: req.user?._id || '6535cce72828f4f595fde95e'
        })
        return res.send('Comment Created')
    } catch (err) {
        console.log(err)
    }
}
async function handleGetCommentById(req, res) {
    try {
        const id = req.params.id
        const comment = await Comment.findById(id)
        return res.json(comment)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    handlePostComment,
    handleGetCommentById
}
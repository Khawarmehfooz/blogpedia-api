
const Blog = require('../models/blog')
const Comment = require('../models/comment')

async function handlePostComment(req, res) {
    await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user?._id || '6535cce72828f4f595fde95e'
    })
    return res.send('Comment Created')
}

module.exports = {
    handlePostComment,
}
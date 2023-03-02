const { findUserById } = require('./users');

const comments = [];
const nextCommentId = () => {
	const maxId = comments.reduce((maxId, comment) => Math.max(comment.id, maxId), 0);
	return maxId + 1;
};

function getCommentWithAuthor(comment) {
	return { ...comment, author: findUserById(comment.authorId) };
}

function createComment(params) {
	const comment = {
		id: nextCommentId(),
		body: params.body,
		authorId: params.authorId,
		insertedAt: new Date().toISOString(),
	};

	comments.push(comment);

	const commentWithAuthor = getCommentWithAuthor(comment);
	return commentWithAuthor;
}

function listComments() {
	return comments.map((comment) => getCommentWithAuthor(comment));
}

module.exports = { createComment, listComments };

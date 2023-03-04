const { findUserById } = require('./users');

const comments = [
	{
		userId: 0,
		name: '',
		img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
		messages: ['comment 11', 'comment 12'],
	},
	{
		userId: 0,
		name: '',
		img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		messages: ['comment 21', 'comment 22', 'comment 23'],
	},
	{
		userId: 3,
		name: '',
		img: 'https://scontent.fdac148-1.fna.fbcdn.net/v/t1.6435-9/176308954_3895239627255663_7567357723583280330_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGOG2594sG6xkP55jbKjCFDlqdnfz_yseiWp2d_P_Kx6DA-NZwftA62dNul2R0j1H4XnMMJXvgOmpuL0R33s2BW&_nc_ohc=r-kxTDlr7CEAX8vV1-N&_nc_ht=scontent.fdac148-1.fna&oh=00_AfAkaHa1LtdOzdju0tVuZVj1SZVTzKjG2OQk4ml7_7FBoA&oe=6428FA74',
		messages: ['comment 41'],
	},
	{
		userId: 0,
		name: '',
		img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
		messages: ['comment 31'],
	},
];
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
	return comments;
}

module.exports = { createComment, listComments };

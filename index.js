const express = require('express');
const app = express();
require('dotenv').config();

const http = require('http').Server(app);
const cors = require('cors');
const { getUser } = require('./lib/users');
const { listComments, createComment } = require('./lib/comments');

app.use(cors());
app.use(express.json());

const URL = process.env.URL;

// Add this to where your other requires are
const io = require('socket.io')(http, {
	cors: {
		origin: URL,
	},
});

io.on('connection', (socket) => {
	console.log('connected!');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

app.post('/user', (req, res) => {
	res.json({ id: 3, name: 'tareq', email: 'gg@dd.com' });
});

app.get('/chats', (req, res) => {
	const comments = listComments();
	res.json(comments);
});

app.post('/chat', async (req, res) => {
	const comment = createComment(req.body);
	io.emit('new-comment', { comment });
	res.json(comment);
});

const PORT = process.env.PORT;

http.listen(PORT, () => {
	console.log(`Running at ${PORT}`);
});

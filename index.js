const express = require('express');
const app = express();
require('dotenv').config();

const http = require('http').Server(app);
const cors = require('cors');
const { users } = require('./lib/users');
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

// Above our `app.get("/users")` handler
io.on('connection', (socket) => {
	console.log(`⚡: ${socket.id} user just connected!`);

	socket.on('disconnect', () => {
		console.log('🔥: A user disconnected');
	});
});

app.get('/users', (req, res) => {
	res.json(users);
});
app.get('/comments', (req, res) => {
	const comments = listComments();
	res.json(comments);
});
app.post('/comments', async (req, res) => {
	const comment = createComment(req.body);
	io.emit('new-comment', { comment });
	res.json(comment);
});

const PORT = process.env.PORT;

http.listen(PORT, () => {
	console.log(`Running at ${PORT}`);
});

const express = require('express');
const app = express();

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
	res.json();
});
app.get('/comments', (req, res) => {
	res.json();
});
app.post('/comments', async (req, res) => {
	res.json();
});

http.listen(PORT, () => {
	console.log(`Running at ${PORT}`);
});

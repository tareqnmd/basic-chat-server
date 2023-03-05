const customerController = require('./controllers/customer.controller');

const registerRoutes = (app) => {
	// app homepage
	app.post('/', (req, res) => {
		res.send('Welcome to the Node.js');
	});
};

module.exports = { registerRoutes };

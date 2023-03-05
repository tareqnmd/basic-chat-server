const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
	'mongodb://tareqnmd:pp.t06grga.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
	const collection = client.db('chitchat').collection('users');
	console.log('collection,err', collection, err);
	app.post('/user', (req, res) => {
		const user = getUser(req.body);
		res.json(user);
	});
	client.close();
});

const users = [
	{
		id: '1',
		name: 'Dhruba',
		email: 'dhruba@test.com',
		password: '123456',
		avatar: '',
	},
	{
		id: '2',
		name: 'Tamim',
		email: 'tamim@test.com',
		password: '123456',
		avatar: '',
	},
	{
		id: '3',
		name: 'Tareq',
		email: 'tareq@test.com',
		password: '123456',
		avatar: '',
	},
];

function getUser(payload) {
	const userFound = users.find(
		(user) => user.email === payload.email && user.password === payload.password
	);
	return userFound ? { id: userFound.id, email: userFound.email, name: userFound.name } : false;
}

module.exports = { getUser };

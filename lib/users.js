const users = [
	{
		id: '1',
		name: 'Dhruba',
		email: 'dhruba@test.com',
		avatar: '',
	},
	{
		id: '2',
		name: 'Tamim',
		email: 'tamim@test.com',
		avatar: '',
	},
	{
		id: '3',
		name: 'Tareq',
		email: 'tareq@test.com',
		avatar: '',
	},
];

function findUserById(userId) {
	return users.find((user) => user.id === userId);
}

module.exports = { users, findUserById };

const users = [
	{
		user_id: 1,
		user_name: 'tareqnmd',
		user_full_name: 'Mohammad Tareq',
		user_email: 'tareqnmd@gmail.com',
		user_avatar_url: 'https://i.ibb.co/kGgVgSK/tareq.jpg',
		user_password: '$2b$10$wZ9w.P.0bAQbbaIVjCxqwuMyIQqnjvv57AURKt5YfQdW5iMl5.JYK',
	},
];

function getUser(payload) {
	const userFound = users.find(
		(user) => user.email === payload.email && user.password === payload.password
	);
	const { password, ...rest } = userFound;
	return userFound ? rest : false;
}

module.exports = { getUser };

const users = [
	{
		id: '1',
		name: 'Dhruba',
		email: 'dhruba@test.com',
		password: '123456',
		imgSrc: '',
	},
	{
		id: '2',
		name: 'Tamim',
		email: 'tamim@test.com',
		password: '123456',
		imgSrc: '',
	},
	{
		id: '3',
		name: 'Tareq',
		email: 'tareq@test.com',
		password: '123456',
		imgSrc:
			'https://scontent.fdac148-1.fna.fbcdn.net/v/t1.6435-9/176308954_3895239627255663_7567357723583280330_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGOG2594sG6xkP55jbKjCFDlqdnfz_yseiWp2d_P_Kx6DA-NZwftA62dNul2R0j1H4XnMMJXvgOmpuL0R33s2BW&_nc_ohc=r-kxTDlr7CEAX8vV1-N&_nc_ht=scontent.fdac148-1.fna&oh=00_AfAkaHa1LtdOzdju0tVuZVj1SZVTzKjG2OQk4ml7_7FBoA&oe=6428FA74',
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

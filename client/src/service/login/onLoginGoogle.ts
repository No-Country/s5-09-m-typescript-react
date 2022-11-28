//import axios from 'axios';
import API_URL from '../API_URL';

export const onLoginGoogle = async (
	name: string,
	picture: string,
	sub: string,
	email: string,
) => {
	try {
		const res = await API_URL.post('/googleLogin', {
			name,
			picture,
			sub,
			email,
		});
		console.log(res);
	} catch (error) {
		return error;
	}
};

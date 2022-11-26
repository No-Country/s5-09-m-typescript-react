import axios from 'axios';
import API_URL from '../API_URL';

export const onLoginGoogle = async (
	name: string,
	picture: string,
	sub: string,
	email: string,
) => {
	try {
		const res = await axios.post(`${API_URL}/googleLogin`, {
			name,
			picture,
			sub,
			email,
		});
	} catch (error) {
		return error;
	}
};

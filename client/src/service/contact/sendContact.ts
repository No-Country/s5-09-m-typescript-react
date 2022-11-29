import axios from 'axios';
import API_URL from '../API_URL';

export const sendContact = async (
		fullName: string,
		email: string,
        text: string,

) => {
	try {
		const res = await API_URL.post('/sendContact', {
			fullName,
			email,
            text,
		});
		console.log(res);
	} catch (error) {
		return error;
	}
};
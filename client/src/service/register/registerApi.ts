import { API_URL } from '../';

interface data {
	fullname: string;
	email: string;
	password: string;
}

export const onRegister = async (data: data) => {
	try {
		const resp = await API_URL.post('/user/', data);
		console.log(resp.data);
		// dispatch(setUser(dataUser));
	} catch (error) {
		console.log(error);
	}
};

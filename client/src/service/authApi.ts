import axios from 'axios';

const authApi = axios.create({
	baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

export const onLogin = ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	authApi
		.post('/login', {
			email,
			password,
		})
		.then(({ data }) => localStorage.setItem('user', JSON.stringify(data)));
};

export const onLoginGoogle = (data: any) => {
	console.log(data);
};

export default authApi;

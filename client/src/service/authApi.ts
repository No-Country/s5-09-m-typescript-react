import axios from 'axios';
const localUrl = 'http://localhost:3002';
const authApi = axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? import.meta.env.VITE_APP_BACKEND_URL
			: localUrl + '/api',
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

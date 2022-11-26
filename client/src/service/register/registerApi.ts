import axios from 'axios';

const localUrl = 'http://localhost:3002';
const authApi = axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? import.meta.env.VITE_APP_BACKEND_URL
			: localUrl, // no hay rutas /api,
});

export const onRegister = (data: any) => {
	authApi.post('/user/', data).then(data => console.log(data));
};

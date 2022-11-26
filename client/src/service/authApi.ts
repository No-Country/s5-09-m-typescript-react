import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginAdapter } from '../adapters/adapter';
import { user } from '../models/user.type';
import { setUser } from '../redux/slices/user';
const localUrl = 'http://localhost:3002';
const authApi = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? import.meta.env.VITE_APP_BACKEND_URL
			: localUrl, // no hay rutas /api,
});

export const onLogin = (
	{
		email,
		password,
	}: {
		email: string;
		password: string;
	},
	dispatch?: ThunkDispatch<
		{
			user: user;
		},
		undefined,
		AnyAction
	> &
		any,
) => {
	authApi
		.post('/login', {
			email,
			password,
		})
		.then(({ data }) => {
			localStorage.setItem('user', JSON.stringify(loginAdapter(data, email)));
			dispatch(setUser(loginAdapter(data, email)));
		});
	console.log(process.env.NODE_ENV);
};

export const onLoginGoogle = async (
	name: string,
	picture: string,
	sub: string,
	email: string,
) => {
	try {
		const res = await axios.post(`${localUrl}/googleLogin`, {
			name,
			picture,
			sub,
			email,
		});
	} catch (error) {
		return error;
	}
};

export default authApi;

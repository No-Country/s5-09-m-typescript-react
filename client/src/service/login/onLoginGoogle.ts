//import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser } from '../../redux/slices/user';
import API_URL from '../API_URL';

export const onLoginGoogle = async (
	name: string,
	picture: string,
	sub: string,
	email: string,
	dispatch: Dispatch,
) => {
	try {
		const res = await API_URL.post('/googleLogin', {
			name,
			picture,
			sub,
			email,
		});
		console.log(res);
		localStorage.setItem('toke', JSON.stringify(res.data.token));
		const { data: getUser } = await API_URL.get(`/user/findOne/${res.data.id}`);
		const dataUser = loginAdapter(getUser);
		console.log(getUser);
		dispatch(setUser(dataUser));
	} catch (error) {
		console.log(error);
	}
};

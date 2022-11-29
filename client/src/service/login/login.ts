import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser, emailVerification } from '../../redux/slices/user';
import API_URL from '../API_URL';

export const onLogin = async (
	{
		email,
		password,
	}: {
		email: string;
		password: string;
	},
	dispatch: Dispatch,
) => {
	try {
		const { data } = await API_URL.post('/login', {
			email,
			password,
		});
		localStorage.setItem('toke', JSON.stringify(data.token));
		const { data: getUser } = await API_URL.get(`/user/findOne/${data.id}`, {
			headers: {
				token: `${data.token}`,
			},
		});
		const dataUser = loginAdapter(getUser);
		console.log(dataUser);
		dispatch(setUser(dataUser));
	} catch (err: any) {
		const data = err.response.data;
		console.log(data);
		if (data.msg === 'El email no esta verificado') {
			const { data: getUser } = await API_URL.get(`/user/findOne/${data.id}`);
			const dataUser = loginAdapter(getUser);
			dispatch(setUser(dataUser));
		}
	}
};

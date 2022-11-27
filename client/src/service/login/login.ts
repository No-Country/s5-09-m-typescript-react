import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser } from '../../redux/slices/user';
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
		const { data: getUser } = await API_URL.get(`/user/findOne/${data.id}`);
		const dataUser = loginAdapter(getUser, data.token);
		dispatch(setUser(dataUser));
		localStorage.setItem('user', JSON.stringify(dataUser));
	} catch (err) {
		return err;
	}
};

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
		console.log(data);
		const { data: getUser } = await API_URL.get(`/user/findOne/${data.id}`);
		console.log(getUser);
		/* localStorage.setItem('user', JSON.stringify(loginAdapter(data, email))); */
		dispatch(setUser(loginAdapter(getUser)));
	} catch (err) {
		return err;
	}
};

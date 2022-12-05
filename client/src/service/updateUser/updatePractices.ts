import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser } from '../../redux/slices/user';
import { User } from '../../types';
import API_URL from '../API_URL';

export const updatePractices = async (
	data: any,
	user: Partial<User>,
	dispatch: Dispatch,
) => {
	try {
		console.log(user.id);
		const resp = await API_URL.put(`/user/update/${user.id}`, data);
		console.log('actualizado', resp.data);
		console.log(user.token);
		const { data: getUser } = await API_URL.get(`/user/findOne/${user.id}`, {
			headers: {
				token: user.token,
			},
		});
		const dataUser = loginAdapter(getUser, user.google, user.token);
		dispatch(setUser(dataUser));
	} catch (error: any) {
		console.log(error);
	}
};

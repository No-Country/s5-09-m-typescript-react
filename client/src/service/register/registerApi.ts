import { Dispatch } from '@reduxjs/toolkit';
import { API_URL } from '../';
import { changeState } from '../../redux/slices/setting';

interface data {
	fullname: string;
	email: string;
	password: string;
}

export const onRegister = async (data: data, dispatch: Dispatch) => {
	try {
		dispatch(changeState());
		const resp = await API_URL.post('/user/', data);
		console.log(resp.data);
		dispatch(changeState());
	} catch (error) {
		console.log(error);
		dispatch(changeState());
	}
};

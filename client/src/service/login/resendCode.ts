import { Dispatch } from '@reduxjs/toolkit';
import { changeCode } from '../../redux/slices/user';
import API_URL from '../API_URL';

export const resendCode = async (dispatch: Dispatch, email: string) => {
	try {
		const res = await API_URL.post('/resendCode', {
			email: email,
		});
		console.log(res);
		/* dispatch(changeCode()); */
	} catch (error) {
		console.log(error);
	}
};

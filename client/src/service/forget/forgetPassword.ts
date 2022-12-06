import { Dispatch } from '@reduxjs/toolkit';
import { changeVerifyLog } from '../../redux/slices/setting';
import API_URL from '../API_URL';

type Data = {
	email: string;
};

export const postForgetPassword = async (data: Data, dispatch: Dispatch) => {
	try {
		const resp = await await API_URL.post('/forgotPassword', data);

		resp.data.ok && dispatch(changeVerifyLog('Email Enviado'));
	} catch (error) {
		console.log(error);
		dispatch(changeVerifyLog('Error email'));
	}
};

import { Dispatch } from '@reduxjs/toolkit';
import { changeVerifyLog } from '../../redux/slices/setting';
import API_URL from '../API_URL';

type Data = {
	token: string;
	password: string;
};

export const resetPassword = async (data: Data, dispatch: Dispatch) => {
	try {
		const resp = await API_URL.post(
			'/resetPassword ',
			{
				password: data.password,
			},
			{
				headers: { token: data.token },
			},
		);

		console.log(data.token);

		resp.data.ok && dispatch(changeVerifyLog('Contraseña cambiada'));
	} catch (error) {
		console.log(error);
		dispatch(changeVerifyLog('Error contraseña'));
	}
};

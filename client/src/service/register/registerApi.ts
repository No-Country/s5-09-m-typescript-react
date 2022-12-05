import { Dispatch } from '@reduxjs/toolkit';
import { API_URL } from '../';
import { changeState, changeVerifyLog } from '../../redux/slices/setting';

type practice = {
	practice: string;
};
type data = {
	fullname: string;
	email: string;
	password: string;
	img: string;
	practices: practice[];
};

export const onRegister = async (data: Partial<data>, dispatch: Dispatch) => {
	try {
		const resp = await API_URL.post('/user/', data);
		console.log('onRegister response', resp.data);
		dispatch(changeState());
		resp.data.msg == 'Usuario creado' &&
			dispatch(changeVerifyLog('Usuario creado'));
	} catch (error: any) {
		console.log(error.response.data.msg);
		error.response.data.msg == 'El usuario ya existe.' &&
			dispatch(changeVerifyLog('El usuario ya existe.'));
	}
};

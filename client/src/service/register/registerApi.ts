import { Dispatch } from '@reduxjs/toolkit';
import { API_URL } from '../';
import { changeState } from '../../redux/slices/setting';
import { onLogin } from '../../service';

type practice = {
  practice: string
}
type data = {
	fullname: string;
	email: string;
	password: string;
  img: string;
  practices: practice[],
}

export const onRegister = async (data: Partial<data>, dispatch: Dispatch) => {
	try {
		dispatch(changeState());
		const resp = await API_URL.post('/user/', data);
		console.log("onRegister response", resp.data);
		dispatch(changeState());
    onLogin({email: data.email ?? "", password: data.password ?? ""}, dispatch)
    
	} catch (error) {
		console.log(error);
		dispatch(changeState());
	}
};

import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser, emailVerification } from '../../redux/slices/user';
import API_URL from '../API_URL';
import {changeErrorPassword} from '../../redux/slices/setting';
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
    sessionStorage.setItem('userData', JSON.stringify({
			email: email,
			password: password,
		}))
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
    sessionStorage.removeItem('userData')
	} catch (err: any) {
		const data = err.response.data; //este es el err.msg
		console.log(data); 
		if (data.msg === 'El email no esta verificado') {
			dispatch(emailVerification({ code: data.code, id: data.id }));
		}else{
		if(data.error[0].msg === 'The Password has to contain min 8 chars, 1 lowercase(min), 1 uppercase(min), 1 number(min), 1 symbol(min) '){
			dispatch(changeErrorPassword());
		}}}
	};

type verifyCode = {
  userId?: string,
}

export const verifyCode = async ( {userId}: verifyCode, dispatch: Dispatch ) => {
  try {
		const response = await API_URL.put(`/user/update/${userId}`, {
			email_verified: true,
		});

    //una vez que se cambio el "email_verified" a true, es necesario obtener el token de nuevo
    const userData = JSON.parse(sessionStorage.getItem('userData') || "")
		onLogin(userData, dispatch)
	} catch (err: any) {
		console.log(err);
	}
}
import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser, emailVerification } from '../../redux/slices/user';
import API_URL from '../API_URL';
import { changeErrorEmail, changeErrorPassword } from '../../redux/slices/setting';
import { User } from '../../types';
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
		localStorage.setItem('token', JSON.stringify(data.token));
		const { data: getUser } = await API_URL.get(`/user/findOne/${data.id}`, {
			headers: {
				token: `${data.token}`,
			},
		});
		const dataUser = loginAdapter(getUser, true, false, data.token);
		localStorage.setItem('User', JSON.stringify(dataUser));
		dispatch(setUser(dataUser));
	} catch (err: any) {
		const data = err.response.data; //este es el err.msg
		if (data.msg === 'El email no esta verificado') {
			dispatch(
				emailVerification({
					code: data.code,
					id: data.id,
					email: data.email,
					password,
				}),
			);
		} else {
			if(
				data.msg === 'El email no esta registrado'
				){
					dispatch(changeErrorEmail());
				}
			
			else {
				if (
					data.error[0].msg ===
					'La contraseña debe contener min 8 carácteres, 1 minúscula(min), 1 mayúscula(min), 1 numero(min), 1 simbolo(min) '
				) {
					dispatch(changeErrorPassword());
				} 
				
			} 
		}
	}
};

export const verifyCode = async (user: Partial<User>, dispatch: Dispatch) => {
	try {
		const res = await API_URL.put(`/user/update/${user.id}`, {
			email_verified: true,
		});
		if (res.data.userRetrieved.ok) {
			const { data } = await API_URL.post('/login', {
				email: user.email,
				password: user.password,
			});
			localStorage.setItem('token', JSON.stringify(data.token));
			const { data: getUser } = await API_URL.get(`/user/findOne/${data.id}`, {
				headers: {
					token: `${data.token}`,
				},
			});
			const dataUser = loginAdapter(getUser, true, false, data.token);
			localStorage.setItem('User', JSON.stringify(dataUser));
			dispatch(setUser(dataUser));
		}
	} catch (err: any) {
		console.log(err);
	}
};

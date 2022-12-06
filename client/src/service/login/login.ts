import { Dispatch } from '@reduxjs/toolkit';
import { loginAdapter } from '../../adapters/adapter';
import { setUser, emailVerification } from '../../redux/slices/user';
import API_URL from '../API_URL';
import { changeErrorPassword } from '../../redux/slices/setting';
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
		console.log(dataUser);
		dispatch(setUser(dataUser));
		sessionStorage.removeItem('userData');
	} catch (err: any) {
		const data = err.response.data; //este es el err.msg
		console.log(data);
		if (data.msg === 'El email no esta verificado') {
			dispatch(
				emailVerification({ code: data.code, id: data.id, email: data.email }),
			);
		} else {
			if (
				data.error[0].msg ===
				'La contraseña debe contener min 8 carácteres, 1 minúscula(min), 1 mayúscula(min), 1 numero(min), 1 simbolo(min) '
			) {
				dispatch(changeErrorPassword());
			}
		}
	}
};

export const verifyCode = async (id: string) => {
	try {
		await API_URL.put(`/user/update/${id}`, {
			email_verified: true,
		});
	} catch (err: any) {
		console.log(err);
	}
};

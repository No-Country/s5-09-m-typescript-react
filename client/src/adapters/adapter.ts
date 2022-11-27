import { loginAdapter, user } from '../models/user.type';

export function loginAdapter(data: loginAdapter, token: string): user {
	const { user } = data;
	return {
		id: user._id,
		userName: user.fullname,
		email: user.email,
		isAuth: data.ok,
		userJwt: token,
		img: '',
		emailVerified: false,
	};
}

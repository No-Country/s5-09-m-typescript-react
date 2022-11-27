export interface loginAdapter {
	ok: boolean;
	status?: number;
	msg?: string;
	user: {
		fullname: string;
		email: string;
		_id: string;
	};
}
export function loginAdapter(data: loginAdapter, token: string) {
	const { user } = data;
	return {
		id: user._id,
		userName: user.fullname,
		email: user.email,
		isAuth: data.ok,
		userJwt: token,
	};
}

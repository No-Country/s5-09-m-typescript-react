interface loginAdapter {
	admin: boolean;
	id: string;
	msg: string;
	ok: boolean;
	token: string;
}
export function loginAdapter(data: loginAdapter, name: string) {
	return {
		id: data.id,
		userName: name,
		userJwt: data.token,
		isAuth: data.ok,
	};
}

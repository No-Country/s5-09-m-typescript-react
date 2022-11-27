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
export function loginAdapter(data: loginAdapter) {
	const { user } = data;
	return {
		id: user._id,
		userName: user.fullname,
		email: user.email,
		isAuth: data.ok,
	};
}
/* "msg": "User finded with success",
    "status": 200,
    "ok": true,
    "user": {
        "fullname": "Yamila paez",
        "email": "yamilapaez2@hotmail.com",
        "_id": "6335bb7539217f29f0585bd7"
    } */

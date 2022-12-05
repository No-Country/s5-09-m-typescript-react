import { User } from '../types';
/* interface loginAdapter {
	
	msg: string
	status: number
	ok: Boolean
	user: {
			_id: string
			fullname: string
			img: string
			password: string
			email: string
			admin: Boolean
			externId: string
			email_verified: Boolean
			status: string
			resetLink: string
			code: Number
			practices: Array
			notifications: Array
			notes: Array
			__v: Number
	
} */
export function loginAdapter(
	data: any,
	google?: boolean,
	token?: string,
): User {
	const { user } = data;
	return {
		email: user.email,
		emailVerified: user.email_verified,
		name: user.fullname,
		img: user.img,
		id: user._id,
		password: user.password,
		practices: user.practices,
		google: google,
		token: token,
	};
}

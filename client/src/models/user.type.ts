export interface user {
	id: string;
	userName: string;
	email: string;
	isAuth: boolean;
	emailVerified: boolean;
	img: string;
	userJwt: string;
}

export interface userCreated {
	status: 'Loading' | 'Success' | 'Error';
}
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

export const userEmptyState: user = {
	id: '',
	userName: '',
	email: '',
	isAuth: false,
	emailVerified: false,
	img: '',
	userJwt: '',
};

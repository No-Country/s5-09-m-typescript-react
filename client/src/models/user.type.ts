export interface ApiUser {
	jwt: string;
	user: {
		id: string | number;
		user_name: string;
	};
}

export interface user {
	id: string | number;
	userName: string;
	userJwt: string;
	isAuth: boolean;
}

export const userEmptyState: user = {
	id: '0',
	userName: '',
	userJwt: '',
	isAuth: false,
};

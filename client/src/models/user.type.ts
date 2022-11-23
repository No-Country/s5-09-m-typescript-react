export interface ApiUser {
	jwt: string;
	user: {
		id: string | number;
		user_name: string;
	};
}

export interface user {
	id: string;
	userName: string;
	userJwt: string;
	isAuth: boolean;
}

export const userEmptyState: user = {
	id: '',
	userName: '',
	userJwt: '',
	isAuth: true,
};

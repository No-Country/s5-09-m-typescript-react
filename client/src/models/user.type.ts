export interface ApiUser {
	jwt: string;
	user: {
		id: string | number;
		user_name: string;
	};
}

export interface user {
	userName: string;
	userJwt: string;
	isAuth: boolean;
}

export const userEmptyState: user = {
	userName: '',
	userJwt: '',
	isAuth: false,
};

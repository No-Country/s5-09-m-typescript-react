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
	email: string;
	isAuth: boolean;
}

export const userEmptyState: user = {
	id: '',
	userName: '',
	email: '',
	isAuth: false,
};

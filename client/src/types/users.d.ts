export interface User {
	code?: string | undefined;
	email?: string;
	emailVerified?: boolean;
	name?: string;
	img?: string;
	password?: string;
	practices?: Array;
	id: string | undefined;
}
export interface EmailVerified {
	code: string | undefined;
	id: string | undefined;
	msg: string;
	ok: boolean;
}

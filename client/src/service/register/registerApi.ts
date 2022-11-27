import { API_URL } from '../';

export const onRegister = (data: any) => {
	let isSuccess = false;
	API_URL.post('/user/', { ...data, img: '' })
		.then(data => console.log(data))
		.then(() => {
			isSuccess = true;
		});

	return isSuccess;
};

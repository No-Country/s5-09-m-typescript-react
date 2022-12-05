import API_URL from '../API_URL';

export const getHabits = async () => {
	try {
		const res = await API_URL.get('/habit');
		return res;
	} catch (error) {
		console.log(error);
	}
};

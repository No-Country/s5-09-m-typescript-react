import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const API_URL = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? import.meta.env.VITE_APP_LOCAL_BACKEND
			: import.meta.env.VITE_APP_BACKEND_URL,
});

export default API_URL;

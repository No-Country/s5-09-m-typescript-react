import axios from 'axios';

const API_URL = axios.create({
	baseURL: import.meta.env.VITE_APP_LOCAL_BACKEND,
	/* import.meta.env.NODE_ENV === 'development' 
			? import.meta.env.VITE_APP_LOCAL_BACKEND
			: import.meta.env.VITE_APP_BACKEND_URL, */
});

export default API_URL;

import axios from 'axios';

const API_URL = axios.create({
	baseURL:
		// process.env.NODE_ENV === 'development'
		/*usar esta condicion si se quiere testear back deployeado desde el front local*/
		process.env.NODE_ENV === 'production'
			? import.meta.env.VITE_APP_BACKEND_URL
			: import.meta.env.VITE_APP_LOCAL_BACKEND, // no hay rutas /api,
});

export default API_URL;

import axios, { type AxiosInstance } from 'axios'
const apiClient: AxiosInstance = axios.create({
	baseURL: 'https://localhost:7199/api/',
	headers: {
		'Content-Type': 'application/json'
	}
});
export default apiClient

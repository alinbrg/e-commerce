import axios from "axios";
export default function apiRequest(method, endpoint, data = {}, headers = {}) {
	const defaultHeaders = {
		Authorization: "some unic logic for authorization",
	};

	return axios({
		method,
		url: "https://us-central1-js04-b4877.cloudfunctions.net/api/" + endpoint,
		data,
		headers: { ...defaultHeaders, ...headers },
	}).then((res) => res.data);
	// then დამატება დასჭირდა useQuery-ს გამოყენებისთვის რადგან ამის გარეშე data ობიექტი ბრუნდება
}

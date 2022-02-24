import axios from "axios"

export default axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
})

// const apiClient = axios.create({
// 	baseURL: 'https://jsonplaceholder.typicode.com',
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8',
// 	}
// })

// export default {
// 	getPosts() {
// 		return apiClient.get('/posts')
// 	}
// }
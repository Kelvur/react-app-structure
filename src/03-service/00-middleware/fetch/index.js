
export const COMMON_HEADERS = {
	// 'Content-Type': 'application/json; charset=utf-8',
}

export const FETCH_CONFIG = {
	headers: COMMON_HEADERS,
}

export const get = (url = '', config = {}) => {
	return fetch(url, {
		...FETCH_CONFIG,
		...config,
		method: 'GET',
	})
	.then(response => response.json())
	.catch(error => console.error(error))
}

export const post = (url = '', data = {}, config = {}) => {
	return fetch(url, {
		...FETCH_CONFIG,
		...config,
		method: 'POST',
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.catch(error => console.error(error))
}

// GET RESOURCE
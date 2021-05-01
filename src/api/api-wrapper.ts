const defaultHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
}

interface Type {
	url: string
	data?: any
	method?: string
	headers?: any
	hasResponse?: boolean
}
export function handelRequests({
	method,
	url,
	data,
	headers = defaultHeaders,
	hasResponse = true,
}: Type) {
	return fetch(url, {
		headers,
		method,
		body: JSON.stringify(data),
	})
		.then(handleErrors)
		.then(hasResponse ? handleResponse : (error) => error)
}

export async function handleErrors(response: any) {
	if (response.status >= 200 && response.status < 300) {
		return response
	}

	if (response.status === 401) {
		localStorage.removeItem('accessToken')
		window.location.href = '/'
		location.reload()
	}

	throw await response.json()
}

export async function handleResponse(response: any) {
	return await response.json()
}

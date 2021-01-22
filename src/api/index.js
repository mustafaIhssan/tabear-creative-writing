import { useAuth } from '../security'
import { SERVER_URL } from '../config'
import { useQuery, useMutation as useMutationReactQuery } from 'react-query'
import { handelRequests } from './api-wrapper'

const defaultQueryOptions = {
	staleTime: 5000 * 60, // 5 min
}

function getFullUrl(url) {
	if (url.indexOf('https://') === 0 || url.indexOf('http://') === 0) {
		return url
	}

	return SERVER_URL + url
}

export function useFetch({ url, queryKey = url, map, ...queryOptions }) {
	queryOptions = { ...defaultQueryOptions, ...queryOptions }
	const { accessToken } = useAuth()

	const headers = {
		'Content-Type': 'application/json',
		Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
	}

	async function fetchURL() {
		const data = await handelRequests({
			url: getFullUrl(url),
			headers,
		})

		return map ? map(data) : data
	}

	return useQuery(queryKey, fetchURL, queryOptions)
}

export function useMutation({ url, method = 'POST', map }) {
	const { accessToken } = useAuth()
	const headers = {
		'Content-Type': 'application/json',
		Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
	}

	async function triggerMutation(data) {
		const result = await handelRequests({
			url: getFullUrl(url),
			headers,
			method,
			data,
		})

		return map ? map(result) : result
	}

	return useMutationReactQuery(triggerMutation)
}

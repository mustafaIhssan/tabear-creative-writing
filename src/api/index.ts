import { useMutation as useMutationReactQuery, useQuery } from 'react-query'

import { SERVER_URL } from '../config.json'
import { useAuth } from '../security'
import { handelRequests } from './api-wrapper'

const defaultQueryOptions = {
	staleTime: 5000 * 60, // 5 min
}

function getFullUrl(url: string) {
	if (url.indexOf('https://') === 0 || url.indexOf('http://') === 0) {
		return url
	}

	return SERVER_URL + url
}

interface fetchType {
	url: string
	queryKey: string
	map(data: Record<string, unknown>[]): Record<string, unknown>[]
}
export function useFetch({
	url,
	queryKey = url,
	map,
	...queryOptions
}: fetchType) {
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

interface mutationType {
	url: string
	method: string
	map(data: Record<string, unknown>[]): Record<string, unknown>[]
}

export function useMutation({ url, method = 'POST', map }: mutationType) {
	const { accessToken } = useAuth()
	const headers = {
		'Content-Type': 'application/json',
		Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
	}

	async function triggerMutation(data: Record<string, unknown>) {
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

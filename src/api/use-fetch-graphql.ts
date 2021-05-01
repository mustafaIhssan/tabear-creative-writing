import { request } from 'graphql-request'
// import { useMutation as useMutationReactQuery, useQuery } from 'react-query'
import { useQuery } from 'react-query'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SERVER_GRAPHQL_URL } from '../config.json'
// import { useAuth } from '../security'
// import { handelRequests } from './api-wrapper'

const defaultQueryOptions = {
	staleTime: 5000 * 60, // 5 min
}

interface fetchType {
	query: string
	queryKey: string
}
export function useFetchGraphQL({
	query,
	queryKey,
	...queryOptions
}: fetchType) {
	queryOptions = { ...defaultQueryOptions, ...queryOptions }

	async function fetchQuery() {
		return (await request(SERVER_GRAPHQL_URL, query)) || {}
	}

	return useQuery(queryKey, fetchQuery, queryOptions)
}
//
// interface mutationType {
// 	url: string
// 	method: string
// 	map(data: Record<string, unknown>[]): Record<string, unknown>[]
// }
//
// export function useMutation({ url, method = 'POST', map }: mutationType) {
// 	const { accessToken } = useAuth()
// 	const headers = {
// 		'Content-Type': 'application/json',
// 		Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
// 	}
//
// 	async function triggerMutation(data: Record<string, unknown>) {
// 		const result = await handelRequests({
// 			url: getFullUrl(url),
// 			headers,
// 			method,
// 			data,
// 		})
//
// 		return map ? map(result) : result
// 	}
//
// 	return useMutationReactQuery(triggerMutation)
// }

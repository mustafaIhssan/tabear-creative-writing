import { gql } from 'graphql-request'

import { useFetchGraphQL } from '../../api/use-fetch-graphql'
import { PageSpinner } from '../../components/page-spinner'
import { PromptsItem } from '../prompts/prompts-item'

export function Prompts() {
	const { isLoading, data: { prompts } = {} } = useFetchGraphQL({
		queryKey: 'prompts/main',
		query: gql`
			{
				prompts {
					id
					content
					language
					tags
					createdAt
					stories {
						id
						createdAt
						score
						user: users_permissions_user {
							id
							username
						}
					}
				}
			}
		`,
	})

	return (
		<div className="flex-1">
			<h1>Latest Prompts</h1>
			<PageSpinner loading={isLoading}>
				{prompts?.map((i: Record<string, unknown>) => (
					<PromptsItem key={i.id} data={i} />
				))}
			</PageSpinner>
		</div>
	)
}

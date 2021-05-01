import { gql } from 'graphql-request'

import { useFetchGraphQL } from '../../api/use-fetch-graphql'
import { PageSpinner } from '../../components/page-spinner'

export function RandomPrompt() {
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
				}
			}
		`,
	})

	return (
		<div className="flex-1">
			<h1>Latest Prompts</h1>
			<PageSpinner loading={isLoading}>
				{prompts?.map((i: Record<string, unknown>) => (
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					<div key={i.id}>{JSON.stringify(i)}</div>
				))}
			</PageSpinner>
		</div>
	)
}

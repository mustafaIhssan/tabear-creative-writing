import { gql } from 'graphql-request'

import { useFetchGraphQL } from '../../api/use-fetch-graphql'
import { PageSpinner } from '../../components/page-spinner'
import { UserStory } from '../../components/user-story'

export function Stories() {
	const { isLoading, data: { stories } = {} } = useFetchGraphQL({
		queryKey: 'stories/main',
		query: gql`
			{
				stories {
					content
					id
					score
					createdAt
					prompt {
						id
						content
						tags
						createdAt
						language
					}
					user: users_permissions_user {
						username
						email
						id
					}
					comments {
						id
						content
						createdAt
						score
						user: users_permissions_user {
							id
							username
							email
						}
					}
				}
			}
		`,
	})

	return (
		<div className="flex-1">
			<h1>Latest Stories</h1>
			<PageSpinner loading={isLoading}>
				{stories?.map((i: Record<string, unknown>) => (
					<UserStory key={i.id} data={i} />
				))}
			</PageSpinner>
		</div>
	)
}

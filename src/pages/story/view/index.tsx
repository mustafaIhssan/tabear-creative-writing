import { Button } from 'antd'
import { gql } from 'graphql-request'
import { Link, useParams } from 'react-router-dom'

import { useFetchGraphQL } from '../../../api/use-fetch-graphql'
import { CommentSection } from '../../../components/comment-section'
import { Layout } from '../../../components/layout'
import { PageSpinner } from '../../../components/page-spinner'

export function StoryPage() {
	const { id }: Record<string, string> = useParams()

	const { isLoading, data: { story } = {} } = useFetchGraphQL({
		queryKey: 'stories/main',
		query: gql`
			{
				story(id: "${id}") {
					id
					createdAt
					content
					score
					prompt {
						id
						content
						language
						tags
						createdAt
					}
					user : users_permissions_user {
						id
						username
					}
					comments {
						id
						content
						createdAt
						score
						user : users_permissions_user {
							id
							username
						}
					}
				}
			}
		`,
	})

	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="text-center px-32 flex flex-col">
					<h1 className="mt-8 text-xl font-semibold">{story?.id}</h1>
					<h1 className="mt-8 text-xl font-semibold">
						User: {story?.user?.username}
					</h1>
					<h2>Score: {story?.score}</h2>

					<span className="mt-2 p-4">{story?.content}</span>

					<Button className="w-20 mx-auto">
						<Link to={`/story/${story?.id}/update`}>Edit</Link>
					</Button>
					<CommentSection data={story?.comments} />
				</div>
			</PageSpinner>
		</Layout>
	)
}

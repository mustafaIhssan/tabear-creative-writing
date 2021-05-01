import { Button } from 'antd'
import { Link, useParams } from 'react-router-dom'

import { useFetch } from '../../../api'
import { Layout } from '../../../components/layout'
import { PageSpinner } from '../../../components/page-spinner'
// import { UserStory } from '../../../components/user-story'

export function PromptsViewPage() {
	const { id }: any = useParams()

	const { isLoading, data: prompt = {} } = useFetch({
		url: `/prompts/${id}`,
	})

	console.log(prompt)

	const tags = prompt?.tags && JSON.parse(prompt.tags)

	// const [stories] = useStory({
	// 	where: { id, field: 'prompt' },
	// })
	//
	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className="text-center px-32">
					<h1 className="mt-8 text-xl font-semibold">{prompt.published_at}</h1>
					<h1 className="mt-8 text-xl font-semibold">
						Language: {prompt.language}
					</h1>

					<h2 className="space-x-8 my-5">
						{tags?.map((i: any) => (
							<span key={i}>{i}</span>
						))}
					</h2>

					<span className="mt-2 p-4">{prompt.content}</span>

					<Button className="w-20 mx-auto">
						<Link to={`/prompts/${prompt.id}/update`}>Edit</Link>
					</Button>

					{/*{stories?.map((i: any) => (*/}
					{/*	<UserStory key={i.id} story={i} />*/}
					{/*))}*/}
				</div>
			</PageSpinner>
		</Layout>
	)
}

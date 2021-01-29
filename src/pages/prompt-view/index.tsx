import React from 'react'
import { useParams } from 'react-router-dom'
import { PageSpinner } from '../../components/page-spinner'
import { Layout } from '../../components/layout'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { UserStory } from '../../components/user-story'
import { useStory } from '../../api/story'

export function PromptsViewPage() {
	const { id }: any = useParams()

	const [promptSnapShot, isLoading, error] = useDocument(
		firestore.doc(`prompt/${id}`),
	)
	const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }

	const [stories] = useStory({
		where: { id, field: 'prompt' },
	})

	return (
		<Layout>
			<PageSpinner loading={isLoading}>
				<div className='text-center px-32'>
					<h1 className='mt-8 text-xl font-semibold'>{prompt.id}</h1>
					<h1 className='mt-8 text-xl font-semibold'>
						Language: {prompt.language}
					</h1>

					{prompt.tags.map((i: any) => (
						<span key={i.name}>{i.name}</span>
					))}

					<h2 className="space-x-8 my-5">
						{prompt.tags.map((i: any) => (
							<span key={i}>{i}</span>
						))}
					</h2>

					<span className='mt-2 p-4'>{prompt.content}</span>

					{stories?.map((i: any) => (
						<UserStory key={i.id} story={i} />
					))}
				</div>
			</PageSpinner>
		</Layout>
	)
}

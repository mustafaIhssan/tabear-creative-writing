import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'antd'
import { strip } from '../../utils/utils'
import { PageSpinner } from '../../components/page-spinner'
import { Layout } from '../../components/layout'
import { useAuth } from '../../security'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { UserStory } from './user-story'

export function PromptsViewPage() {
	const { id } = useParams()

	const [promptSnapShot, isLoading, error] = useDocument(
		firestore.doc(`prompt/${id}`)
	)
	const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }

	const [storiesSnapshot, isStoriesLoading] = useCollection(
		firestore.collection('story').where('prompt', '==', id)
	)

	const stories = storiesSnapshot?.docs?.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}))

	console.log({ stories })

	return (
		<Layout>
			{isLoading ? (
				<PageSpinner />
			) : (
				<div className="text-center px-32">
					<h1 className="mt-8 text-xl font-semibold">{prompt.id}</h1>
					<h1 className="mt-8 text-xl font-semibold">
						Language: {prompt.language}
					</h1>

					{prompt.tags.map((i) => (
						<span key={i.name}>{i.name}</span>
					))}

					<h2 className="space-x-8 my-5">
						{prompt.tags.map((i) => (
							<span key={i}>{i}</span>
						))}
					</h2>

					<span className="mt-2 p-4">{prompt.content}</span>

					{stories?.map((i) => (
						<UserStory key={i.id} story={i} />
					))}
				</div>
			)}
		</Layout>
	)
}

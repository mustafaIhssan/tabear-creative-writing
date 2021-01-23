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
	// @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{}'.
	const { id } = useParams()

	const [promptSnapShot, isLoading, error] = useDocument(
		firestore.doc(`prompt/${id}`)
	)
	const prompt = { ...promptSnapShot?.data(), id: promptSnapShot?.id }

	const [storiesSnapshot, isStoriesLoading] = useCollection(
		firestore.collection('story').where('prompt', '==', id)
	)

	// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'doc' implicitly has an 'any' type.
	const stories = storiesSnapshot?.docs?.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}))

	console.log({ stories })

	return (
		<Layout>
			{isLoading ? (
				// @ts-expect-error ts-migrate(2786) FIXME: 'PageSpinner' cannot be used as a JSX component.
				<PageSpinner />
			) : (
				<div className="text-center px-32">
					<h1 className="mt-8 text-xl font-semibold">{prompt.id}</h1>
					<h1 className="mt-8 text-xl font-semibold">
						Language: {prompt.language}
					</h1>

					{/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type. */}
					{prompt.tags.map((i) => (
						<span key={i.name}>{i.name}</span>
					))}

					<h2 className="space-x-8 my-5">
						{/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type. */}
						{prompt.tags.map((i) => (
							<span key={i}>{i}</span>
						))}
					</h2>

					<span className="mt-2 p-4">{prompt.content}</span>

					{/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type. */}
					{stories?.map((i) => (
						<UserStory key={i.id} story={i} />
					))}
				</div>
			)}
		</Layout>
	)
}

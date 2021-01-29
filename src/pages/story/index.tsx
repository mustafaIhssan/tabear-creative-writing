import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/layout'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { PageSpinner } from '../../components/page-spinner'
import { CommentSection } from '../../components/comment-section'

export function StoryPage() {
	const { id }: any = useParams()

	const [storySnapShot, isLoading, error] = useDocument(
		firestore.doc(`story/${id}`)
	)
	const story = { ...storySnapShot?.data(), id: storySnapShot?.id }

	return (
		<Layout>
			{isLoading ? (
				<PageSpinner />
			) : (
				<div className="text-center px-32">
					<h1 className="mt-8 text-xl font-semibold">{story.id}</h1>
					<h1 className="mt-8 text-xl font-semibold">
						User: {story.user}
					</h1>
					<h2>Score: {story.score}</h2>

					<span className="mt-2 p-4">{story.content}</span>

					<CommentSection story={id} />
				</div>
			)}
		</Layout>
	)
}

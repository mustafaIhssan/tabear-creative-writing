import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export function CommentSection({ story }) {
	const [_comments, isLoading] = useCollection(
		firestore.collection('comments').where('story', '==', story)
	)

	const comments = _comments?.docs?.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}))

	return (
		<div className="m-5">
			{comments?.map((i) => (
				<Comment key={i.id} comment={i} />
			))}
		</div>
	)
}

export function Comment({ comment }) {
	return (
		<div className="flex bg-blue-200 p-5 rounded-lg flex flex-col mb-5">
			<div className="flex items-center">
				<div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
					{comment.score}
				</div>
				<div className="text-xl leading-6 font-medium text-gray-900 w-full">
					{comment.user}
				</div>
			</div>
			{comment.parent && <div>Re: {comment.parent}</div>}
			<div className="mt-2 text-base text-gray-500 line-clamp-3">
				{comment.content}
			</div>
		</div>
	)
}

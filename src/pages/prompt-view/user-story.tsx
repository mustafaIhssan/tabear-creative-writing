import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'antd'

export function UserStory({ story }: any) {
	return (
		<div className="flex bg-blue-200 p-5 rounded-lg flex flex-col mb-5">
			<div className="flex items-center">
				<div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
					{story.score}
				</div>
				<div className="text-xl leading-6 font-medium text-gray-900 w-full">
					{story.user}
				</div>
			</div>
			<div className="mt-2 text-base text-gray-500 line-clamp-3">
				{story.content}
			</div>

			<Link to={`/story/${story.id}`}>
				<Button>View</Button>
			</Link>
		</div>
	)
}

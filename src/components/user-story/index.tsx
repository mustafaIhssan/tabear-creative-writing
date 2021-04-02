import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'antd'
import { IconTag } from '../icon-tag'

const getRandRange = () => Math.floor(Math.random() * 100)

export function UserStory({ story }: any) {
	const tempImages = [...Array(3).fill(0)].map(
		(i) =>
			`https://randomuser.me/api/portraits/${
				i % 2 === 0 ? 'men' : 'women'
			}/${getRandRange()}.jpg`
	)

	const tags = [...story?.prompt?.tags, story.prompt?.language]
	return (
		<div className="card">
			<div className="flex space-x-4 items-center px-5">
				<div>
					<img
						src={tempImages[0]}
						alt="user.name"
						width="64"
						height="64"
						className="w-15 h-15 rounded-full"
					/>
				</div>
				<div className="text-left">
					<div className="text-xl leading-6 font-medium text-gray-900 w-full">
						{story.user}
					</div>
					<div className="text-gray-500">5 min ago</div>
					<div className="space-x-2 mt-2">
						{tags?.map((i: any) => (
							<span
								className="p-1 rounded bg-blue-200"
								key={story.id + i}
							>
								{i.toUpperCase()}
							</span>
						))}
					</div>
				</div>
			</div>

			<p
				className={`font-sans subpixel-antialiased tracking-wide leading-relaxed
				mt-8 px-5 text-xl text-left text-gray-900 line-clamp-3`}
			>
				{story.content}
			</p>

			<div className="flex flex-row space-x-2 items-center">
				<div className="flex justify-start -space-x-2 pl-5 py-5">
					{tempImages.map((i) => (
						<img
							key={i}
							src={i}
							alt="user.name"
							width="64"
							height="64"
							className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white"
						/>
					))}
				</div>
				<p className="text-gray-500 mx-auto h-full">
					Connie and other Posted here.
				</p>
			</div>

			<div className="flex border-t p-3">
				<IconTag
					text={`${story.score} Like`}
					icon="M5 11l7-7 7 7M5 19l7-7 7 7"
				/>

				<Link to={`/story/${story.id}`}>
					<IconTag
						text="Read Story"
						icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
					/>
				</Link>

				<Link to={`/prompts/${story.prompt?.id}`}>
					<IconTag
						text="See Prompt"
						icon="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
					/>
				</Link>
			</div>
		</div>
	)
}

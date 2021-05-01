// interface Props {
// 	data: {
// 		language: string
// 		content: string
// 		id: string
// 		tags: string
// 		user?: string
// 	}
// }
import dayjs from 'dayjs'
import pluralize from 'pluralize'
import { Link } from 'react-router-dom'

import { IconTag } from '../../components/icon-tag'

const getRandRange = () => Math.floor(Math.random() * 100)

export function PromptsItem({ data }: any) {
	const tempImages = [...Array.from({ length: 3 }).fill(0)].map(
		(_, i) =>
			`https://randomuser.me/api/portraits/${
				i % 2 === 0 ? 'men' : 'women'
			}/${getRandRange()}.jpg`
	)

	const tags = [...JSON.parse(data?.tags), data?.language]

	return (
		<div className="card">
			<div className="flex space-x-4 items-center px-5">
				<div>
					<img
						src={tempImages[1]}
						alt="user.name"
						width="64"
						height="64"
						className="w-15 h-15 rounded-full"
					/>
				</div>
				<div className="text-left">
					<div className="text-xl leading-6 font-medium text-gray-900 w-full">
						{data?.user || 'NAME'}
					</div>
					<div className="text-gray-500">
						{dayjs(data?.createdAt).fromNow()}{' '}
						{dayjs(data?.createdAt).format('DD/MM/YYYY')}
					</div>
					<div className="space-x-2 mt-2">
						{tags?.map((i: any) => (
							<span className="p-1 rounded bg-blue-200" key={data.id + i}>
								{i.toUpperCase()}
							</span>
						))}
					</div>
				</div>
			</div>

			<p
				className={`font-sans subpixel-antialiased tracking-wide leading-relaxed
				mt-8 px-5 text-xl ${
					data.language === 'en' ? 'text-left' : 'text-right'
				} text-gray-900`}
			>
				{data.content}
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
					text={pluralize('Like', data.stories.length, true)}
					icon="M5 11l7-7 7 7M5 19l7-7 7 7"
				/>
				<Link to={`/prompts/${data.id}`}>
					<IconTag
						text={pluralize('Post', data.stories.length, true)}
						icon="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
					/>
				</Link>
			</div>
		</div>
	)
}

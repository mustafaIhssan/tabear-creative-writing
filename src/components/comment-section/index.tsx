import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export function CommentSection({ data }: any) {
	return (
		<div className="m-5">
			{data?.map((i: Record<string, unknown>) => (
				<Comment key={i.id} comment={i} />
			))}
		</div>
	)
}

export function Comment({ comment }: any) {
	return (
		<div className="flex bg-blue-200 p-5 rounded-lg flex flex-col mb-5">
			<div className="flex items-center">
				<div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
					{comment.score}
				</div>
				<div className="text-xl leading-6 font-medium text-gray-900 w-full">
					{comment?.user?.username} {dayjs(comment?.createdAt).fromNow()}{' '}
				</div>
			</div>
			{comment.parent && <div>Re: {comment.parent}</div>}
			<div className="mt-2 text-base text-gray-500 line-clamp-3">
				{comment.content}
			</div>
		</div>
	)
}

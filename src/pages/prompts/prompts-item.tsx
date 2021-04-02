import { Link } from 'react-router-dom'
import { Button } from 'antd'

interface Props {
	language: string
	content: string
	id: string
	tags: string[]
}

export function PromptsItem(item: Props) {
	return (
		<div className="bg-pink-200 text-center p-5 m-2">
			<ul>
				<li>Language: {item.language}</li>
				<li className="text-xl my-6">{item.content}</li>
				<div className="space-x-2 m-5">
					{item.tags?.map((i) => (
						<span className="p-2 bg-blue-200" key={item.id + i}>
							{i}
						</span>
					))}
				</div>
			</ul>
			<Link to={`/prompts/${item.id}`}>
				<Button>View</Button>
			</Link>
		</div>
	)
}

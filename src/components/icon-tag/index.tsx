interface Props {
	text?: string
	icon?: string
}

export function IconTag({ text, icon }: Props) {
	return (
		<div className="flex rounded-lg space-x-2 p-3 hover:bg-blue-100 hover:text-blue-700 text-gray-700 items-center">
			<svg
				className="w-6 h-6 text-gray-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d={icon}
				/>
			</svg>
			<span>{text}</span>
		</div>
	)
}

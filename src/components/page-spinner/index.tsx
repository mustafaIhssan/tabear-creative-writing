import { Spin } from 'antd'
import { ReactNode } from 'react'

interface SpinnerProps {
	loading?: boolean
	children?: ReactNode
}

export function PageSpinner({ loading, children }: SpinnerProps) {
	return loading ? (
		<div className="flex items-center justify-center">
			<Spin />
		</div>
	) : (
		<div>{children}</div>
	)
}

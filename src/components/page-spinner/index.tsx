import React from 'react'
import { Spin } from 'antd'

interface SpinnerProps {
	loading?: boolean
	children?: React.ReactNode
}

export function PageSpinner({ loading, children }: SpinnerProps) {
	return loading ? (
		<div className='flex items-center justify-center'>
			<Spin />
		</div>
	) : (
		<div>{children}</div>
	)
}

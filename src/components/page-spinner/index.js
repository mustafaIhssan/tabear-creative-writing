import { Spin } from 'antd'

export function PageSpinner() {
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Spin />
		</div>
	)
}

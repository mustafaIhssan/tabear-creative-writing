import { Spin } from 'antd'

export function PageSpinner() {
	return (
		// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
		<div
			// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'style'.
			style={{
				// @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
				height: '100vh',
				// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'display'. Did you mean 'VRDispla... Remove this comment to see the full error message
				display: 'flex',
				// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
				alignItems: 'center',
				// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
				justifyContent: 'center',
			}}
			// @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
		>
			// @ts-expect-error ts-migrate(2352) FIXME: Conversion of type
			'RegExp' to type 'Spin' may be ... Remove this comment to see the
			full error message
			<Spin />
		</div>
	)
}

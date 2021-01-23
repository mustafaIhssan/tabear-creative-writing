export function Logo() {
	return (
		// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
		<div className="text-xl">
			// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name
			'Creative'. Creative<strong>Tabear</strong>
		</div>
	)
}

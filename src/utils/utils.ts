export function strip(text = '') {
	return text.replace(/<[^>]*>?/gm, '')
}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'error' implicitly has an 'any' type.
export function getError(error) {
	const errors = error?.data?.params

	return errors ? Object.values(errors) : null
}

export function strip(text = '') {
	return text.replace(/<[^>]*>?/gm, '')
}

export function getError(error) {
	const errors = error?.data?.params

	return errors ? Object.values(errors) : null
}

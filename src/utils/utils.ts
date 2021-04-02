export function strip(text = '') {
	return text.replace(/<[^>]*>?/gm, '')
}
interface errorType {
	data: {
		params: object
	}
}

export function getError(error: errorType) {
	const errors = error?.data?.params

	return errors ? Object.values(errors) : null
}

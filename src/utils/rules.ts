export const rules = {
	select: [{ required: true, message: 'Please select an option!' }],
	input: [{ required: true, message: "It can't be empty!" }],
	password: [{ required: true, message: 'Please input your password!' }],
	email: [
		{ required: true, message: 'Please input your password!' },
		{ type: 'email' },
	],
	date: [{ required: true, message: 'Please select a date!' }],
}

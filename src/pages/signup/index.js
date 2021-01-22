import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Alert, Button, Form, Input } from 'antd'
import { useAuth } from '../../security'
import { rules } from '../../utils/rules'
import { Layout } from '../../components/layout'

export function SingupPage() {
	const { singup, loading } = useAuth()

	const history = useHistory()
	const location = useLocation()
	const [error, setError] = useState(null)

	const { from } = location.state || { from: { pathname: '/' } }

	const onFinish = async (values) => {
		const { isSuccess, data } = await singup(values)

		console.log({ data })
		if (isSuccess) {
			history.replace(from)
		} else {
			setError(data.message)
		}
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Layout>
			<div className="h-full flex items-center justify-center">
				<div className="">
					{error && (
						<Alert
							message="Error"
							className="mb-8"
							description={error}
							type="error"
							showIcon
						/>
					)}

					<div>
						<pre>sign-up</pre>
					</div>

					<div className="text-center p-5">
						<Form
							name="login"
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								label="Email"
								name="email"
								rules={rules.email}
							>
								<Input />
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={rules.password}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item
								label="Password Confirm"
								name="password-confirm"
								rules={[
									...rules.password,
									({ getFieldValue }) => ({
										validator(_, value) {
											if (
												!value ||
												getFieldValue('password') ===
													value
											) {
												return Promise.resolve()
											}

											return Promise.reject(
												'The two passwords that you entered do not match!'
											)
										},
									}),
								]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									loading={loading}
									htmlType="submit"
								>
									Sign Up
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</Layout>
	)
}

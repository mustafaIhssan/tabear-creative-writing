import { Alert, Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Layout } from '../../components/layout'
import { useAuth } from '../../security'
import { rules } from '../../utils/rules'

export function SingupPage() {
	const { singup, loading }: any = useAuth()

	const history = useHistory()
	const location = useLocation()
	const [error, setError] = useState()

	const { from }: any = location.state || { from: { pathname: '/' } }

	const onFinish = async (values: Record<string, unknown>) => {
		const { isSuccess, data } = await singup(values)

		console.log({ data })
		if (isSuccess) {
			history.replace(from)
		} else {
			setError(data.message)
		}
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Layout>
			<div className="h-full flex items-center justify-center">
				<div>
					{error && (
						<Alert
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							key={error?.[0]?.messages[0].message}
							message="Error"
							className="mb-8"
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							description={error?.[0]?.messages[0].message}
							type="error"
							showIcon
						/>
					)}
					<div className="text-5xl mb-10 text-center">
						Creative<strong>Tabear</strong>
					</div>
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
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
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
											if (!value || getFieldValue('password') === value) {
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
								<Button type="primary" loading={loading} htmlType="submit">
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

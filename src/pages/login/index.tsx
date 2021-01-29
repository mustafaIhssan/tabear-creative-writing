import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Alert, Button, Checkbox, Form, Input } from 'antd'
import { useAuth } from '../../security'
import { rules } from '../../utils/rules'
import { Layout } from '../../components/layout'

export function LoginPage() {
	const { login, loading }: any = useAuth()

	const history = useHistory()
	const location = useLocation()
	const [error, setError] = useState(null)

	const { from }: any = location.state || { from: { pathname: '/' } }

	const onFinish = async (values: any) => {
		const { isSuccess, data } = await login(values)

		if (isSuccess) {
			history.replace(from)
		} else {
			setError(data.message)
		}
	}

	const onFinishFailed = (errorInfo: object) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Layout>
			<div className="h-full flex items-center justify-center">
				<div>
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
						<pre>login</pre>
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
							<Form.Item name="remember" valuePropName="checked">
								<Checkbox>Remember me</Checkbox>
							</Form.Item>
							<Form.Item>
								<Button
									type="primary"
									loading={loading}
									htmlType="submit"
								>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		</Layout>
	)
}

import { Alert, Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Layout } from '../../components/layout'
import { useAuth } from '../../security'
import { rules } from '../../utils/rules'

export function LoginPage() {
	const { login, loading }: any = useAuth()

	const history = useHistory()
	const location = useLocation()
	const [error, setError] = useState()

	const { from }: any = location.state || { from: { pathname: '/' } }

	const onFinish = async (values: any) => {
		const { isSuccess, data } = await login(values)

		if (isSuccess) {
			history.replace(from)
		} else {
			setError(data.message)
		}
	}

	// eslint-disable-next-line unicorn/consistent-function-scoping
	const onFinishFailed = (errorInfo: Record<string, unknown>) =>
		// eslint-disable-next-line no-console
		console.log('Failed:', errorInfo)

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
					<div className="text-5xl mb-10 text-center">
						Creative<strong>Tabear</strong>
					</div>
					<div className="text-center p-5 mx-auto" style={{ width: '500px' }}>
						<Form
							name="login"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 20 }}
							onFinish={onFinish}
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
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
							<Form.Item name="remember" valuePropName="checked">
								<Checkbox>Remember me</Checkbox>
							</Form.Item>
							<Form.Item>
								<Button type="primary" loading={loading} htmlType="submit">
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

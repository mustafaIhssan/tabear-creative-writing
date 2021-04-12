import { Alert, Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Layout } from '../../components/layout'
import { useAuth } from '../../security'
import { rules } from '../../utils/rules'

export function LoginPage() {
	const { login, isLoading }: any = useAuth()

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
					<div className="text-center p-5 mx-auto" style={{ width: '500px' }}>
						<Form
							name="login"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 20 }}
							onFinish={onFinish}
						>
							<Form.Item
								label="Email"
								name="identifier"
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
								<Button type="primary" loading={isLoading} htmlType="submit">
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

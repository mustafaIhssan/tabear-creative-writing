import React from 'react'
import { Form, Input, InputNumber, Select } from 'antd'
import { rules } from '../../utils/rules'
import { PageSpinner } from '../page-spinner'
import { useTranslation } from 'react-i18next'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'

export function StoryForm({ form, data }: any) {
	console.log(data)

	return (
		<div>
			<h1 className="p-4">
				{!data ? 'Add a new Story' : `Update Story:  ${data.id}`}
			</h1>

			<div className="p-5">
				<Form
					name="product-form"
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 18 }}
					form={form}
					initialValues={data}
				>
					<Form.Item
						rules={rules.input}
						name="content"
						label="Story Description"
					>
						<Input.TextArea
							rows={4}
							placeholder={'Product Description'}
						/>
					</Form.Item>

					<Form.Item
						rules={rules.select}
						name="score"
						label="Story Score"
					>
						<InputNumber
							className="w-full"
							placeholder={'Product Description'}
						/>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

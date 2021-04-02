import React from 'react'
import { Form, Input, InputNumber, Select } from 'antd'
import { rules } from '../../utils/rules'
import { PageSpinner } from '../page-spinner'
import { useTranslation } from 'react-i18next'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'
import { Layout } from '../layout'

export function StoryForm({ form, data }: any) {
	console.log(data)

	const isEnglish = true

	return (
		<div className="flex flex-col h-full">
			<div className="text-center">
				<h1 className="text-xl mx-12">{data.prompt?.content}</h1>
				<div className="flex justify-center mt-2 space-x-2 ">
					{data?.prompt?.tags?.map((i: any) => (
						<span
							className="p-2 bg-blue-200"
							key={data?.prompt?.id + i}
						>
							{i}
						</span>
					))}
				</div>
			</div>

			<div className="flex-grow">
				<div className="flex flex-col h-full px-10 pt-10">
					<Form form={form} initialValues={data}>
						<Form.Item noStyle rules={rules.input} name="content">
							<Input.TextArea
								name="fullName"
								defaultValue={data.content}
								autoSize={true}
								style={{
									height: '90%',
									lineHeight: '1.65',
									fontFamily: 'Montserrat',
									caretColor: 'red',
									fontSize: '12pt',
									textAlign: isEnglish ? 'left' : 'right',
									direction: isEnglish ? 'ltr' : 'rtl',
								}}
								className="resize-none focus:outline-none mb-20 w-full text-gray-700 font-bold"
							/>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	)
}

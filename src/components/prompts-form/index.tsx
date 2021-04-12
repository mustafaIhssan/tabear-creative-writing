import React from 'react'
import { Form, Input, Select } from 'antd'
import { rules } from '../../utils/rules'
import { PageSpinner } from '../page-spinner'
import { useTranslation } from 'react-i18next'
import { useDocument } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase'

export function PromptsForm({ form, data }: any) {
	return <div>d</div>
	// const { t } = useTranslation()
	//
	// const language = [
	// 	{ id: 'en', value: t('en') },
	// 	{ id: 'ar', value: t('ar') },
	// ]
	//
	// const [tagsSnapShot, isLoading, error] = useDocument(
	// 	firestore.collection(`story-tags`)
	// )
	// const tags = tagsSnapShot?.docs?.map((doc: any) => ({
	// 	...doc.data(),
	// 	id: doc.id,
	// }))
	//
	// return (
	// 	<PageSpinner loading={isLoading}>
	// 		<div>
	// 			<h1 className="p-4">
	// 				{!data ? 'Add a new Prompt' : `Update Prompt:  ${data.id}`}
	// 			</h1>
	//
	// 			<div className="p-5">
	// 				<Form
	// 					name="product-form"
	// 					labelCol={{ span: 6 }}
	// 					wrapperCol={{ span: 18 }}
	// 					form={form}
	// 					initialValues={data}
	// 				>
	// 					<Form.Item
	// 						rules={rules.input}
	// 						name="content"
	// 						label="Product Description"
	// 					>
	// 						<Input.TextArea
	// 							rows={4}
	// 							placeholder={'Product Description'}
	// 						/>
	// 					</Form.Item>
	//
	// 					<Form.Item
	// 						rules={rules.select}
	// 						name="language"
	// 						label="Product Type"
	// 					>
	// 						<Select showSearch placeholder="">
	// 							{language.map((option) => (
	// 								<Select.Option
	// 									key={option.id}
	// 									value={option.id}
	// 								>
	// 									{option.value}
	// 								</Select.Option>
	// 							))}
	// 						</Select>
	// 					</Form.Item>
	//
	// 					<Form.Item
	// 						rules={rules.select}
	// 						name="tags"
	// 						label="Product Type"
	// 					>
	// 						<Select showSearch mode="multiple">
	// 							{tags?.map((option: any) => (
	// 								<Select.Option
	// 									key={option.value}
	// 									value={option.value}
	// 								>
	// 									{t(option.value)}
	// 								</Select.Option>
	// 							))}
	// 						</Select>
	// 					</Form.Item>
	// 				</Form>
	// 			</div>
	// 		</div>
	// 	</PageSpinner>
	// )
}

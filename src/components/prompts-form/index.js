import React from 'react'
import { Form, Input, Select } from 'antd'

import { strip } from '../../utils/utils'
// import { useFetch } from '../../api'
import { rules } from '../../utils/rules'
import { PageSpinner } from '../page-spinner'
import { useAuth } from '../../security'

export function PromptsForm({ form, data }) {
	// const types = [
	// 	{ slug: 'simple', value: 'Simple' },
	// 	{ slug: 'grouped', value: 'Grouped' },
	// 	{ slug: 'external', value: 'External' },
	// 	{ slug: 'variable', value: 'Variable' },
	// ]
	//
	// const { storeBaseApi } = useAuth()
	// const { data: categories = [], isLoading: isLoadingCategories } = useFetch({
	// 	url: `${storeBaseApi}/products/categories`,
	// })

	return <div>sdsdsd</div>
	// isLoadingCategories ? (
	//
	// ) : (
	// 	<div>
	// 		<h1 className="p-4">
	// 			{!data ? 'Add a new product' : `Update Product:  ${data.name}`}
	// 		</h1>
	//
	// 		<div className="p-5">
	// 			<Form
	// 				name="product-form"
	// 				labelCol={{ span: 6 }}
	// 				wrapperCol={{ span: 18 }}
	// 				form={form}
	// 				initialValues={{
	// 					...data,
	// 					categories: data?.categories?.map(({ id }) => id),
	// 					description: strip(data?.description),
	// 				}}
	// 			>
	// 				<Form.Item
	// 					rules={rules.input}
	// 					name="name"
	// 					label="Product Name"
	// 				>
	// 					<Input placeholder="Product Name" />
	// 				</Form.Item>
	//
	// 				<Form.Item
	// 					rules={rules.input}
	// 					name="description"
	// 					label="Product Description"
	// 				>
	// 					<Input.TextArea
	// 						rows={4}
	// 						placeholder={'Product Description'}
	// 					/>
	// 				</Form.Item>
	//
	// 				<Form.Item
	// 					rules={rules.select}
	// 					name="type"
	// 					label="Product Type"
	// 				>
	// 					<Select showSearch placeholder="">
	// 						{types.map((option) => (
	// 							<Select.Option
	// 								key={option.slug}
	// 								value={option.slug}
	// 							>
	// 								{option.value}
	// 							</Select.Option>
	// 						))}
	// 					</Select>
	// 				</Form.Item>
	//
	// 				<Form.Item
	// 					rules={rules.input}
	// 					name="regular_price"
	// 					label="Product Price"
	// 				>
	// 					<Input
	// 						placeholder="Product Price"
	// 						prefix="$"
	// 						suffix="USD"
	// 					/>
	// 				</Form.Item>
	//
	// 				<Form.Item
	// 					name="categories"
	// 					label="Product Categories"
	// 					rules={rules.select}
	// 				>
	// 					<Select
	// 						showSearch
	// 						placeholder="Product Categories"
	// 						mode="multiple"
	// 					>
	// 						{categories.map((option) => (
	// 							<Select.Option
	// 								key={option.id}
	// 								value={option.id}
	// 							>
	// 								{option.name}
	// 							</Select.Option>
	// 						))}
	// 					</Select>
	// 				</Form.Item>
	// 			</Form>
	// 		</div>
	// 	</div>*/
	// )
}

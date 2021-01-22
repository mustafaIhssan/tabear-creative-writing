import React, { useState } from 'react'
import { Layout } from '../../components/layout'
import { ProductForm } from '../../components/prompts-form'
import { useAuth } from '../../security'
import { useHistory } from 'react-router-dom'

import { Button, Form } from 'antd'
import { ErrorTag } from '../../components/error-tag'
import { useQueryClient } from 'react-query'

export function ProductNewPage() {
	// const history = useHistory()
	// const [form] = Form.useForm()
	// const queryClient = useQueryClient()
	//
	// const { storeBaseApi } = useAuth()
	// const { mutate, error, isLoading } = useMutation({
	// 	url: `${storeBaseApi}/products`,
	// })
	//
	// const onSubmit = async () => {
	// 	const values = await form.validateFields()
	// 	values.categories = values.categories.map((i) => ({ id: i }))
	// 	mutate(values, {
	// 		onSuccess: (newData) => {
	// 			queryClient.setQueryData(
	// 				`${storeBaseApi}/products`,
	// 				(oldData = []) => [...oldData, newData]
	// 			)
	// 			history.replace({ pathname: '/products' })
	// 		},
	// 	})
	// }

	return (
		<Layout>
			{/*<div className="w-full max-w-3xl">*/}
			{/*	<ErrorTag error={error} />*/}

			{/*	<ProductForm form={form} />*/}

			{/*	<div className="flex justify-center space-x-2">*/}
			{/*		<Button*/}
			{/*			type="primary"*/}
			{/*			onClick={onSubmit}*/}
			{/*			loading={isLoading}*/}
			{/*		>*/}
			{/*			Add product*/}
			{/*		</Button>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</Layout>
	)
}

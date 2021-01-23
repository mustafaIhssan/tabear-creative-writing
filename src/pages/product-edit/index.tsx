import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'antd'
import { useQueryClient } from 'react-query'

// import { useFetch, useMutation } from '../../api'
import { PageSpinner } from '../../components/page-spinner'
import { Layout } from '../../components/layout'
import { ProductForm } from '../../components/prompts-form'
import { useAuth } from '../../security'
import { ErrorTag } from '../../components/error-tag'

export function ProductEditPage({}) {
	// const [form] = Form.useForm()
	// const history = useHistory()
	// const queryClient = useQueryClient()
	//
	// const { id } = useParams()
	// const isNew = false
	// const { storeBaseApi } = useAuth()
	//
	// const url = `${storeBaseApi}/products/${id}`
	//
	// const { data = {}, isLoading } = useFetch({ url })
	//
	// const useEdit = useMutation({ url, method: 'PUT' })
	// const useRemove = useMutation({ url, method: 'DELETE' })
	//
	// const onSubmit = async () => {
	// 	const values = await form.validateFields()
	// 	values.categories = values.categories.map((i) => ({ id: i }))
	// 	useEdit.mutate(values, {
	// 		onSuccess: (newData) => {
	// 			const products = queryClient.getQueryState(
	// 				`${storeBaseApi}/products`
	// 			)
	// 			if (products) {
	// 				queryClient.setQueryData(
	// 					`${storeBaseApi}/products`,
	// 					(oldData) =>
	// 						oldData.map((i) =>
	// 							i.id === parseInt(id) ? newData : i
	// 						)
	// 				)
	// 			}
	//
	// 			queryClient.setQueryData(
	// 				`${storeBaseApi}/products/${id}`,
	// 				newData
	// 			)
	// 			history.replace({ pathname: '/products' })
	// 		},
	// 	})
	// }
	//
	// const onRemove = () => {
	// 	useRemove.mutate(
	// 		{},
	// 		{
	// 			onSuccess: () => {
	// 				queryClient.setQueryData(
	// 					`${storeBaseApi}/products`,
	// 					(oldData = []) =>
	// 						oldData.filter((i) => i.id !== parseInt(id))
	// 				)
	// 				history.replace({ pathname: `/products` })
	// 			},
	// 		}
	// 	)
	// }

	return (
		<Layout>
			{/*{isLoading ? (*/}
			{/*	<PageSpinner />*/}
			{/*) : (*/}
			{/*	<div className="w-full max-w-3xl">*/}
			{/*		<ErrorTag error={useEdit.error} />*/}
			{/*		<ProductForm data={data} form={form} />*/}
			{/*		<div className="flex justify-center space-x-2">*/}
			{/*			<Button*/}
			{/*				type="primary"*/}
			{/*				onClick={onSubmit}*/}
			{/*				loading={useEdit.isLoading}*/}
			{/*			>*/}
			{/*				Edit product*/}
			{/*			</Button>*/}

			{/*			{!isNew && (*/}
			{/*				<Button*/}
			{/*					type="danger"*/}
			{/*					loading={useRemove?.isLoading}*/}
			{/*					onClick={onRemove}*/}
			{/*				>*/}
			{/*					Remove Product*/}
			{/*				</Button>*/}
			{/*			)}*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*)}*/}
		</Layout>
	)
}
